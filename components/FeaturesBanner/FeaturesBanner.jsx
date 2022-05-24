import React from 'react'

function FeaturesBanner() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
            <div className="gpt3__features-container__feature">
                <div className="gpt3__features-container__feature-title bg-opacity-20"><div/>
                    <h1>WordPress</h1>
             </div>
                <div className="gpt3__features-container_feature-text">
                    <p className='text-gray-200'>With LiteSpeed caching, HTTP/2, HTTP/3 (Quic) and IPv6, PHP8, GZIP compression, threat detection and the latest infrastructure updates your WordPress websites will be fast and stable.</p>
                </div>
            </div>
        </div>

        <div className="gpt3__whatgpt3-heading">
            <h1 className="text-white">The possibilities are beyond your imagination</h1>
        </div>
        <div className="gpt3__whatgpt3-container">

        <div className="gpt3__features-container__feature">
        <div className="gpt3__features-container__feature-title">
        <div />
        <h1>Hosting elsewhere?</h1>
        </div>
        <div className="gpt3__features-container_feature-text text-gray-200">
        <p>Migrate for free. Use our automated migration tool for WordPress or have our migration team do the job for you.</p>
        </div>
        </div>


        <div className="gpt3__features-container__feature">
            <div className="gpt3__features-container__feature-title"><div />
            <h1>Complexity</h1>
            </div>
            <div className="gpt3__features-container_feature-text text-gray-200">
            <p>Try our custom-built Vpanel. It’s intuitive, fast and better than cPanel.</p>
            </div>

            
        </div>

        <div className="gpt3__features-container__feature">
            <div className="gpt3__features-container__feature-title"><div />
            <h1>The Speed</h1>
            </div>
            <div className="gpt3__features-container_feature-text text-gray-200">
            <p>You can get more speed with Colorless V. Approved by industry experts.</p>
            </div>

            
        </div>

        </div>
    </div>
  )
}

export default FeaturesBanner