/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/display-name */
import { Box, IconButton, Zoom, styled } from '@mui/material';
import { forwardRef, useEffect, useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Favorite } from '@mui/icons-material';

// Slide main Component
const Slider = styled(Box)({
    position: 'relative',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    overFlow: 'hidden',
    cursor: 'pointer'
});

// Slider Button
const SlideButton = styled(IconButton)(({ direction }) => ({
    display: 'flex',
    padding: '0.1rem',
    borderRadius: '50%',
    backgroundColor: 'rgba(202, 202, 202, 0.61)',
    position: 'absolute',
    left: direction === 'left' && 0,
    right: direction === 'right' && 0,
    marginLeft: direction === 'left' && '0.5rem',
    marginRight: direction === 'right' && '0.5rem',
    '&:hover': {
        backgroundColor: 'rgba(202, 202, 202, 0.719)'
    }
}));

const ActiveIndex = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: '0.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    gap: '0.3rem'
});

const ActiveIndexItem = styled(Box)(({ active }) => ({
    padding: '4px',
    backgroundColor: active ? '#ffff' : 'rgba(202, 202, 202, 0.61)',
    borderRadius: '50%',
    cursor: 'pointer'
}));

const PostSlider = forwardRef(({ medias = [] }, ref) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // function to handle Slide
    function handleSlideBtnClick(newIndex) {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= medias?.length) {
            newIndex = medias?.length - 1;
        }
        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const timeInterval = setTimeout(() => {
            setActiveIndex((prev) => {
                if (prev === medias?.length - 1) {
                    return (prev = 0);
                } else {
                    return prev + 1;
                }
            });
        }, 2000);

        return () => {
            clearTimeout(timeInterval);
        };
    }, [activeIndex]);

    return (
        <Slider ref={ref}>
            {Array.isArray(medias) &&
                medias?.map((media, ind) => (
                    <>
                        {media?.type === 'image' && (
                            <img
                                key={ind}
                                src={media?.src}
                                alt="Not Found"
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    objectFit: 'cover',
                                    cursor: 'pointer',
                                    transition: '0.5s ease',
                                    transform: `translate(-${activeIndex * 100}%)`,
                                    userSelect: 'none'
                                }}
                                loading="lazy"
                            />
                        )}
                        {media?.type === 'video' && (
                            <video
                                controls
                                key={ind}
                                src={media?.src}
                                alt="Not Found"
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    cursor: 'pointer',
                                    transition: '0.5s ease',
                                    transform: `translate(-${activeIndex * 100}%)`,
                                    userSelect: 'none'
                                }}
                                loading="lazy"
                            />
                        )}
                    </>
                ))}

            {/* slider buttons */}
            {Array.isArray(medias) && (
                <>
                    {activeIndex > 0 && (
                        <SlideButton direction="left" onClick={() => handleSlideBtnClick(activeIndex - 1)}>
                            <ChevronLeftIcon />
                        </SlideButton>
                    )}
                    {activeIndex < medias?.length - 1 && (
                        <SlideButton direction="right" onClick={() => handleSlideBtnClick(activeIndex + 1)}>
                            <ChevronRightIcon />
                        </SlideButton>
                    )}

                    {/* active index */}
                    {medias?.length !== 1 && (
                        <ActiveIndex>
                            {medias?.map((item, ind) => (
                                <ActiveIndexItem key={ind} active={activeIndex === ind} onClick={() => handleSlideBtnClick(ind)} />
                            ))}
                        </ActiveIndex>
                    )}
                </>
            )}
        </Slider>
    );
});

export default PostSlider;
