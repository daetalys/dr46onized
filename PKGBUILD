# Maintainer: dr460nf1r3 <dr460nf1r3@garudalinux.org>
# Maintainer: Librewish <librewish@gmail.com>

pkgname=garuda-dr460nized
pkgver=1.2.0
pkgrel=1
arch=('any')
url="https://gitlab.com/garuda-linux/themes-and-settings/settings/$pkgname"
license=('GPL')
makedepends=('coreutils')
source=("$pkgname-$pkgver.tar.gz::$url/-/archive/$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('SKIP')
pkgdesc='Dr460nized settings'
depends=('kvantum-qt5'
        'garuda-icons'
        'garuda-fish-config'
        'nerd-fonts-fantasque-sans-mono'
        'ttf-fira-sans'
        'plasma5-applets-window-buttons'
        'plasma5-applets-window-appmenu'
        'plasma5-applets-window-title'
        'beautyline'
        'sweet-theme-dark'
        'xcursor-sweet')
install=$pkgname.install
provides=('garuda-desktop-settings')
conflicts=('garuda-desktop-settings' 'kvantum-theme-sweet')

package() {
    install -d $pkgdir/etc
    cp -rf $srcdir/$pkgname-$pkgver/etc $pkgdir
    install -d $pkgdir/usr
    cp -rf $srcdir/$pkgname-$pkgver/usr $pkgdir
}
