import { RefObject, useEffect, useState } from "react";
let time = 0
export function useScrollWidth(element: RefObject<HTMLElement>, override = 0) {
    const [maxSize, setMaxSize] = useState<number>(0)
    const [size, setSize] = useState<number>(0)
    useEffect(() => {
        const updateSizes = () => {
            if (element.current) {
                const newSize = element.current.scrollWidth;
                const newMaxSize = (newSize - element.current.clientWidth) - Math.max(override, 0);
                setSize(newSize);
                setMaxSize(Number(newMaxSize.toFixed(0)));

            }
        };

        updateSizes();

        // Add event listener to update sizes when window is resized
        window.addEventListener('resize', updateSizes);

        // Cleanup event listener on component unmount

    }, [element, override])

    return { size, maxSize, setMaxSize, setSize }
}

export function useMoveScroll(element: RefObject<HTMLElement>, config: { move: number, maxSize: number }) {
    const [scroll, setScroll] = useState<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            if (element.current) {

                const getScroll = element.current.scrollLeft; // Redondear para evitar decimales
                setScroll(Math.round(getScroll));

                if (getScroll >= config.maxSize)
                    setScroll(config.maxSize);
            }
        };

        if (element.current) {
            element.current.addEventListener("scroll", handleScroll);
        }

        // Cleanup function to remove the event listener

    }, [element, config.maxSize, scroll]);
    const left = () => {
        document.documentElement.style.setProperty("--image-aling-scroll", "none")
        let left = 0
        time = 300
        if (element.current) {
            left = Math.round(Math.max(scroll - config.move, 0))
            element.current.scrollTo({ left })
            setTimeout(() => {
                document.documentElement.style.setProperty("--image-aling-scroll", "center")
            }, time)
        }
        setScroll(left)
    };

    const right = () => {
        document.documentElement.style.setProperty("--image-aling-scroll", "none")
        let left = 0
        time = 300
        if (element.current) {
            left = Number(Math.round(Math.min(element.current?.scrollLeft + config.move, config.maxSize)))
            element.current.scrollTo({ left })
            setTimeout(() => {
                document.documentElement.style.setProperty("--image-aling-scroll", "center")
            }, time)
        }
        setScroll(left);
    }
    // const getScroll = () => Math.round(scroll)
    return {
        scroll,
        left,
        right,
        more: { setScroll }
    }
}
