import { useCallback, useEffect, useRef } from "react";
import { ArticlesModel } from "../../utils/NewsModel";

export const useLazyLoading = (
  imgSelector: string,
  articles: ArticlesModel[]
) => {
  const imgObserver = useCallback((node) => {
    const intObs = new IntersectionObserver((entries) => {
      entries.forEach((en, index) => {
        if (en.isIntersecting) {
          const currentImg = en.target as HTMLImageElement;
          const newImgSrc = currentImg.dataset.src;
          currentImg.classList.remove(imgSelector.split(".")[1]);

          // only swap out the image source if the new url exists
          if (!newImgSrc) {
            // console.error("Image source is invalid");
          } else {
            currentImg.src = newImgSrc;
          }
          intObs.unobserve(node);
        }
      });
    });
    intObs.observe(node);
  }, []);

  const imagesRef = useRef<NodeListOf<HTMLImageElement>>();

  useEffect(() => {
    imagesRef.current = document.querySelectorAll(imgSelector);

    if (imagesRef.current) {
      imagesRef.current.forEach((img) => imgObserver(img));
    }
  }, [imgObserver, imagesRef, imgSelector, articles]);
};
