# Maintainer: dr460nf1r3 <dr460nf1r3 at garudalinux dot org>
# Maintainer: Librewish <librewish@gmail.com>

pkgname=garuda-dr460nized
pkgver=1.5.10
pkgrel=1
arch=('any')
url="https://gitlab.com/garuda-linux/themes-and-settings/settings/$pkgname"
license=('GPL')
makedepends=('coreutils')
source=("$pkgname-$pkgver.tar.gz::$url/-/archive/$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('SKIP')
pkgdesc='Dr460nized settings'
depends=('beautyline'
        'garuda-icons'
        'garuda-fish-config'
        'kvantum-qt5'
        'kvantum-theme-sweet-git'
        'nerd-fonts-fantasque-sans-mono'
        'plasma5-applets-eventcalendar'
        'plasma5-applets-netspeed'
        'plasma5-applets-window-buttons'
        'plasma5-applets-window-appmenu'
        'plasma5-applets-window-title'
        'plasma5-theme-sweet-git'
        'sweet-gtk-theme-dark'
        'sweet-kde-git'
        'ttf-fira-sans'
        'xcursor-sweet')
install=$pkgname.install
provides=('garuda-desktop-settings')
conflicts=('garuda-desktop-settings' 'kwin-scripts-window-colors')

package() {
    install -d $pkgdir/etc
    cp -rf $srcdir/$pkgname-$pkgver/etc $pkgdir
    install -d $pkgdir/usr
    cp -rf $srcdir/$pkgname-$pkgver/usr $pkgdir
}
