import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServicesRequest } from '../redux/actions';
import { BMap } from "../assets";

const NaxaServices = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.data);
  const loading = useSelector((state) => state.services.loading);
  const error = useSelector((state) => state.services.error);

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  // Sort services based on service_order
  const sortedServices = services.slice().sort((a, b) => a.service_order - b.service_order);

  return (
    <div>
      <div>
        <div className="w-full flex flex-row justify-evenly">
          <div className="pl-32 mt-40">
            <p className="text-lg font-medium font-serifMon tracking-wide text-orange-400">SERVICES</p>
            <br />
            <p className="text-4xl">
              At <span className="font-normal text-blue-600">NAXA</span>, we work on <span className="text-blue-600">ideas</span>; ideas
              that can provide <span className="text-blue-600">simple solutions</span> to
              <span className="font-normal text-blue-600"> complex problems</span>.
            </p>
            <br />
            <p className="mt-5 text-lg font-normal font-serifMon tracking-wide">We work as a team to generate, explore, build and validate ideas. We also contextualize innovations around the world to find the best fitting solutions to local problems.</p>
          </div>
          <img src={BMap} alt="Map" className="ml-4 mt-4 w-1/2 h-auto z-100000" />
        </div>
      </div>


    <div className="bg-gray-100">
      <div className="bg-gray-100 p-4 w-5/6 mx-auto">
        {sortedServices.map((service, index) => (
          <div key={service.id} className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 my-6">
            {index % 2 === 0 ? (
              <>
                <div className="order-2 md:order-1 flex justify-center md:justify-end">
                  <img src={service.icon} alt={service.title} className="w-3/4" />
                </div>
                <div className="order-1 md:order-2 flex flex-col justify-center mb-10 ">
                  <img src={service.photo} alt={service.title} className="w-14 h-14 mb-4" />
                  <br/>
                  <h2 className="text-2xl font-bold mb-2 text-left">{service.title}</h2><br/>
                  <div className="mb-2 text-left" dangerouslySetInnerHTML={{ __html: service.description1 }} /><br/>
                  {service.description2 && (
                    <div className="bg-cpurple p-8 rounded text-left" dangerouslySetInnerHTML={{ __html: service.description2 }} />
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="order-2 md:order-1 flex flex-col justify-center mb-10">
                  <img src={service.photo} alt={service.title} className="w-14 h-14 mb-4" /><br/>
                  <h2 className="text-2xl font-bold mb-2 text-left">{service.title}</h2><br/>
                  <div className="mb-2 text-left" dangerouslySetInnerHTML={{ __html: service.description1 }} /><br/>
                  {service.description2 && (
                    <div className="bg-cpurple p-8 rounded text-left" dangerouslySetInnerHTML={{ __html: service.description2 }} />
                  )}
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-start">
                  <img src={service.icon} alt={service.title} className="w-3/4" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default NaxaServices;
