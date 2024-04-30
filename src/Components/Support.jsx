"use client";

import { supportInfo } from "@/Components/Constants";

const Support = () => {
  return (
    <div>
      <div className=" mx-14 rounded-lg  overflow-hidden">
        <div className="  flex items-center gap-4 p-4">
          {supportInfo.map((info, index) => (
            <div key={index} className=" flex items-center gap-4 py-6">
              <div className="bg-primary-500 rounded-full p-2">
                <box-icon
                  name={info.icon}
                  type={info.type}
                  style={{ color: "#024E82" }}
                ></box-icon>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-gray-900">
                  {info.heading}
                </h3>
                <p className="text-gray-500">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
