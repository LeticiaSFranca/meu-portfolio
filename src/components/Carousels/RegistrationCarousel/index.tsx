import { useEffect, useRef, useState } from 'react';
import Registro1 from '../../../assets/img/Registros/Desenvolvimento/Reg-1.png';
import Registro2 from '../../../assets/img/Registros/Desenvolvimento/Reg-2.png';
import Registro3 from '../../../assets/img/Registros/Desenvolvimento/Reg-3.png';
import Registro4 from '../../../assets/img/Registros/Desenvolvimento/Reg-4.png';
import Registro5 from '../../../assets/img/Registros/Desenvolvimento/Reg-5.png';
import Registro6 from '../../../assets/img/Registros/Desenvolvimento/Reg-6.png';
import Registro7 from '../../../assets/img/Registros/Desenvolvimento/Reg-7.png';
import Registro8 from '../../../assets/img/Registros/Desenvolvimento/Reg-8.png';
import Registro9 from '../../../assets/img/Registros/Desenvolvimento/Reg-9.png';
import Registro10 from '../../../assets/img/Registros/Desenvolvimento/Reg-10.png';
import Registro11 from '../../../assets/img/Registros/Desenvolvimento/Reg-11.png';
import Registro12 from '../../../assets/img/Registros/Desenvolvimento/Reg-12.png';
import Registro13 from '../../../assets/img/Registros/Desenvolvimento/Reg-13.png';
import Registro14 from '../../../assets/img/Registros/Desenvolvimento/Reg-14.png';
import Registro15 from '../../../assets/img/Registros/Desenvolvimento/Reg-15.png';
import Registro16 from '../../../assets/img/Registros/Desenvolvimento/Reg-16.png';
import Registro17 from '../../../assets/img/Registros/Desenvolvimento/Reg-17.png';
import Registro18 from '../../../assets/img/Registros/Desenvolvimento/Reg-18.png';

import './RegistrationCarousel.style.css'; // Arquivo CSS onde as classes estão definidas
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function RegistrationCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenWidth, setScreenWidth] = useState('33.33%');
    const [translateValue, setTranslateValue] = useState(100 / 3);
    const [visibleCardsCount, setVisibleCardsCount] = useState(3);
    const [cardCount] = useState(18);
    const cardContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const checkScreenWidth = () => {
            let newVisibleCardsCount = 0;
            let newWidth = '';
            let newTranslateValue = 0;

            if (window.innerWidth >= 1024) {
                newVisibleCardsCount = 4;
                newWidth = '25%';
                newTranslateValue = 100 / 4;
            } else if (window.innerWidth >= 768) {
                newVisibleCardsCount = 3;
                newWidth = '33.33%';
                newTranslateValue = 100 / 3;
            } else {
                newVisibleCardsCount = 2;
                newWidth = '50%';
                newTranslateValue = 100 / 2;
            }

            setScreenWidth(newWidth);
            setTranslateValue(newTranslateValue);
            setVisibleCardsCount(newVisibleCardsCount);
        };

        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex + visibleCardsCount >= cardCount) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cardCount - visibleCardsCount : prevIndex - 1
        );
    };

    return (
        <div className="carousel-container">
            <FaChevronLeft className="carousel-arrow" onClick={handlePrev} />
            <div className="carousel-wrapper">
                <div
                    ref={cardContainerRef}
                    className="carousel-inner"
                    style={{ transform: `translateX(-${currentIndex * translateValue}%)` }}
                >
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro1} alt="Registro 1" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro2} alt="Registro 2" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro3} alt="Registro 3" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro4} alt="Registro 4" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro5} alt="Registro 5" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro6} alt="Registro 6" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro7} alt="Registro 7" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro8} alt="Registro 8" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro9} alt="Registro 9" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro10} alt="Registro 10" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro11} alt="Registro 11" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro12} alt="Registro 12" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro13} alt="Registro 13" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro14} alt="Registro 14" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro15} alt="Registro 15" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro16} alt="Registro 16" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro17} alt="Registro 17" />
                    </div>
                    <div className="carousel-card" style={{ flexBasis: screenWidth }}>
                        <img src={Registro18} alt="Registro 18" />
                    </div>
                </div>
            </div>
            <FaChevronRight className="carousel-arrow" onClick={handleNext} />
        </div>
    );
}
