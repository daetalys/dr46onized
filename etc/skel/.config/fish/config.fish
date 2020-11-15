set TERM "xterm-256color"             
set EDITOR "micro"
set VISUAL "code"


## Lambda theme https://github.com/hasanozgan/theme-lambda
function fish_prompt
  # Cache exit status
  set -l last_status $status

  # Just calculate these once, to save a few cycles when displaying the prompt
  if not set -q __fish_prompt_hostname
    set -g __fish_prompt_hostname (hostname|cut -d . -f 1)
  end
  if not set -q __fish_prompt_char
    switch (id -u)
      case 0
	set -g __fish_prompt_char '#'
      case '*'
	set -g __fish_prompt_char 'λ'
    end
  end

  # Setup colors
  #use extended color pallete if available
#if [[ $terminfo[colors] -ge 256 ]]; then
#    turquoise="%F{81}"
#    orange="%F{166}"
#    purple="%F{135}"
#    hotpink="%F{161}"
#    limegreen="%F{118}"
#else
#    turquoise="%F{cyan}"
#    orange="%F{yellow}"
#    purple="%F{magenta}"
#    hotpink="%F{red}"
#    limegreen="%F{green}"
#fi
  set -l normal (set_color normal)
  set -l white (set_color FFFFFF)
  set -l turquoise (set_color 5fdfff)
  set -l orange (set_color df5f00)
  set -l hotpink (set_color df005f)
  set -l blue (set_color blue)
  set -l limegreen (set_color 87ff00)
  set -l purple (set_color af5fff)
 
  # Configure __fish_git_prompt
  set -g __fish_git_prompt_char_stateseparator ' '
  set -g __fish_git_prompt_color 5fdfff
  set -g __fish_git_prompt_color_flags df5f00
  set -g __fish_git_prompt_color_prefix white
  set -g __fish_git_prompt_color_suffix white
  set -g __fish_git_prompt_showdirtystate true
  set -g __fish_git_prompt_showuntrackedfiles true
  set -g __fish_git_prompt_showstashstate true
  set -g __fish_git_prompt_show_informative_status true 

  set -l current_user (whoami)

  # Line 1
  echo -n $white'╭─'$hotpink$current_user$white' at '$orange$__fish_prompt_hostname$white' in '$limegreen(pwd|sed "s=$HOME=⌁=")$turquoise
  __fish_git_prompt " (%s)"
  echo

  # Line 2
  echo -n $white'╰'
  # support for virtual env name
  if set -q VIRTUAL_ENV
      echo -n "($turquoise"(basename "$VIRTUAL_ENV")"$white)"
  end
  echo -n $white'─'$__fish_prompt_char $normal
end

## Spark https://github.com/jorgebucaran/spark.fish/blob/main/spark.fish
set -g spark_version 1.0.0

complete -xc spark -n __fish_use_subcommand -a --help -d "Show usage help"
complete -xc spark -n __fish_use_subcommand -a --version -d "$spark_version"
complete -xc spark -n __fish_use_subcommand -a --min -d "Minimum range value"
complete -xc spark -n __fish_use_subcommand -a --max -d "Maximum range value"

function spark -d "sparkline generator"
    if isatty
        switch "$argv"
            case {,-}-v{ersion,}
                echo "spark version $spark_version"
            case {,-}-h{elp,}
                echo "usage: spark [--min=<n> --max=<n>] <numbers...>  Draw sparklines"
                echo "examples:"
                echo "       spark 1 2 3 4"
                echo "       seq 100 | sort -R | spark"
                echo "       awk \\\$0=length spark.fish | spark"
            case \*
                echo $argv | spark $argv
        end
        return
    end

    command awk -v FS="[[:space:],]*" -v argv="$argv" '
        BEGIN {
            min = match(argv, /--min=[0-9]+/) ? substr(argv, RSTART + 6, RLENGTH - 6) + 0 : ""
            max = match(argv, /--max=[0-9]+/) ? substr(argv, RSTART + 6, RLENGTH - 6) + 0 : ""
        }
        {
            for (i = j = 1; i <= NF; i++) {
                if ($i ~ /^--/) continue
                if ($i !~ /^-?[0-9]/) data[count + j++] = ""
                else {
                    v = data[count + j++] = int($i)
                    if (max == "" && min == "") max = min = v
                    if (max < v) max = v
                    if (min > v ) min = v
                }
            }
            count += j - 1
        }
        END {
            n = split(min == max && max ? "▅ ▅" : "▁ ▂ ▃ ▄ ▅ ▆ ▇ █", blocks, " ")
            scale = (scale = int(256 * (max - min) / (n - 1))) ? scale : 1
            for (i = 1; i <= count; i++)
                out = out (data[i] == "" ? " " : blocks[idx = int(256 * (data[i] - min) / scale) + 1])
            print out
        }
    '
end

### FUNCTIONS ###
# Spark functions
function letters
    cat $argv | awk -vFS='' '{for(i=1;i<=NF;i++){ if($i~/[a-zA-Z]/) { w[tolower($i)]++} } }END{for(i in w) print i,w[i]}' | sort | cut -c 3- | spark | lolcat
    printf  '%s\n' 'abcdefghijklmnopqrstuvwxyz'  ' ' | lolcat
end

function commits
    git log --author="$argv" --format=format:%ad --date=short | uniq -c | awk '{print $1}' | spark | lolcat
end

function backup --argument filename
    cp $filename $filename.bak
end

# Functions needed for !! and !$ https://github.com/oh-my-fish/plugin-bang-bang
function __history_previous_command
  switch (commandline -t)
  case "!"
    commandline -t $history[1]; commandline -f repaint
  case "*"
    commandline -i !
  end
end

function __history_previous_command_arguments
  switch (commandline -t)
  case "!"
    commandline -t ""
    commandline -f history-token-search-backward
  case "*"
    commandline -i '$'
  end
end

if [ $fish_key_bindings = fish_vi_key_bindings ];
  bind -Minsert ! __history_previous_command
  bind -Minsert '$' __history_previous_command_arguments
else
  bind ! __history_previous_command
  bind '$' __history_previous_command_arguments
end


alias clear='clear; echo; echo; seq 1 (tput cols) | sort -R | spark | lolcat; echo; echo'

alias ls='exa -al --color=always --group-directories-first' # my preferred listing
alias la='exa -a --color=always --group-directories-first'  # all files and dirs
alias ll='exa -l --color=always --group-directories-first'  # long format
alias lt='exa -aT --color=always --group-directories-first' # tree listing

alias aup="paru -Syu"
alias grubup="sudo update-grub"
alias fixpacman="sudo rm /var/lib/pacman/db.lck"
alias untar='tar -zxvf '
alias wget='wget -c '
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'
alias ......='cd ../../../../..'
alias ls='ls --color=auto'
alias dir='dir --color=auto'
alias vdir='vdir --color=auto'
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'
alias upd='sudo reflector --latest 5 --country Germany --age 2 --fastest 5 --protocol https --sort rate --save /etc/pacman.d/mirrorlist && cat /etc/pacman.d/mirrorlist && sudo pacman -Syu'

alias grep='grep --color=auto'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'

neofetch
