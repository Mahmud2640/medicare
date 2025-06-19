import heroImage from "../assets/images/hero-img01.png";
import heroImage2 from "../assets/images/hero-img02.png";
import heroImage3 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live s healthy, longer life.
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Soluta, vel! Nemo natus quasi expedita sequi mollitia iste
                  doloribus quaerat quibusdam.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImage} alt="heroImage" />
              </div>
              <div className="mt-[30px]">
                <img
                  className="w-full mb-[30px]"
                  src={heroImage2}
                  alt="heroImage2"
                />
                <img className="w-full" src={heroImage3} alt="heroImage3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service section */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text_para text-center">
              World class care for everyone. Our health system offers unmatched,
              expert health services to our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="icon-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
