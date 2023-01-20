import React from 'react';

export const Navbar = () => {
    return (
        <nav className={`${styles.nav}`}>
        <div className="container">
          <div className={`${styles.content}`}>
            <Link href="/" className={`${styles.navLinkLogo}`}>
              <Image src={logo} alt="logo" quality={100} />
            </Link>
            <ul className={`${styles.navList}`}>
              <li className={`${styles.navListItemFacebook}`}>
                <Link className={`${styles.navListFacebook}`}>
                  <Image src={bgLogo} alt="fb" quality={100} />
                </Link>
              </li>
              <li className={`${styles.navListItemInstagram}`}>
                <Link className={`${styles.navLinkInstagram}`}>
                  <Image src={igLogo} alt="ig" quality={100} />
                </Link>
              </li>
              <li className={`${styles.navListItemYoutube}`}>
                <Link   className={`${styles.navLinkYoutube}`}>
                  <Image src={ytLogo} alt="yt" quality={100} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    );
};

