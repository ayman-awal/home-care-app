import React from 'react';

const HomeVideo = () => {
    return (
        <div className='homeVideo2_container' style={{margin: '0 auto'}}>

                <div className='video_container'>
                    <iframe title="vimeo-player" /*src="https://player.vimeo.com/video/814539991?h=bd560046e7"*/
                        src='https://player.vimeo.com/video/875416052?h=fc473d781a'  width="640"
                            height="360" frameborder="0" allowfullscreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen"
                            oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </div>

        </div>
    );
};

export default HomeVideo;