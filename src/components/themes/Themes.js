import desktopImgDark from '../../assets/img/homePage/desktop-background-img-min-dark.png';
import desktopImgLight from '../../assets/img/homePage/desktop-background-img-min.png';
import tabletImgDark from '../../assets/img/homePage/tablet-background-img-min-dark.png';
import tabletImgLight from '../../assets/img/homePage/tablet-background-img-min.png';
import loginDeskImgDark from '../../assets/img/loginPage/GroupDescDark.png';
import loginDeskImgLight from '../../assets/img/loginPage/GroupDesc.png';
import loginTablImgDark from '../../assets/img/loginPage/GroupTablDark.png';
import loginTablImgLight from '../../assets/img/loginPage/GroupTabl.png';

export const lightTheme = {
    body: 'var(--main-background)',
    title: 'var(--main-text)',
    rightBarTitle: 'var(--main-text)',
    rightBarBg: 'var(--secondary-background)',
    burgerBg: 'var(--burger-background)',
    bottomPart: '#EFF1F3',
    toggleBorder: '#FFF',
    background: '#363537',
    homeBgImageDesk: `url(${desktopImgLight})`,
    homeBgImageTabl: `url(${tabletImgLight})`,
    loginBgImageDesk: `url(${loginDeskImgLight})`,
    loginBgImageTabl: `url(${loginTablImgLight})`,
}

export const darkTheme = {
    body: 'var(--burger-background)',
    title: '#fff',
    rightBarTitle: 'var(--accent-color)',
    rightBarBg: '#223a5a',
    burgerBg: '#223a5a',
    bottomPart: '#223a5a',
    toggleBorder: '#6B8096',
    background: '#999',
    homeBgImageDesk: `url(${desktopImgDark})`,
    homeBgImageTabl: `url(${tabletImgDark})`,
    loginBgImageDesk: `url(${loginDeskImgDark})`,
    loginBgImageTabl: `url(${loginTablImgDark})`,
}