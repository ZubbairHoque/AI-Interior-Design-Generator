"use client";
import React from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditionalInformation from "./_components/AdditionalInformation";

function CreateNew() {
  const onHandleInputChange = (value, fieldName) => {
    console.log(`Field: ${fieldName}, Value: ${value}`);
    // Add logic to handle the value change, e.g., update state
  };

  return (
    <div>
      <h2 className="font-bold text-5xl text-primary text-center">
        Create Your Dream Space.
      </h2>
      <p className="text-center mt-4" style={{ color: "#007BFF" }}>
        Let AI transform your vision into reality with just the press of a
        button—start designing your perfect space effortlessly
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        {/* Image Selection */}
        <div className="mb-6">
          <ImageSelection
            selectedImage={(value) => onHandleInputChange(value, "image")}
          />
        </div>

        {/* Form Input Section */}
        <div>
          {/* Room type */}
          <div className="mb-6">
            <RoomType
              SelectRoomType={(value) =>
                onHandleInputChange(value, "roomType")
              }
            />
          </div>

          {/* Design type */}
          <div className="mb-6">
            <DesignType
              SelectDesignType={(value) =>
                onHandleInputChange(value, "DesignType")
              }
            />
          </div>

          {/* Additional Requirements Text Area (Optional) */}
          <div className="mb-6">
            <AdditionalInformation
              onInputChange={(value) =>
                onHandleInputChange(value, "AdditionalInformation")
              }
            />
          </div>

          {/* Submit Button */}
        
        </div>
      </div>
    </div>
  );
}

export default CreateNew;