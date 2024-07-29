import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

interface IProfileDetail {
  label: string;
  value: string;
}

interface IProfileImage {
  src: string;
  alt: string;
}

interface IActionButton {
  to: string;
  gradientDuoTone: string;
  children: string;
}

const ProfileDetail = ({ label, value }: IProfileDetail) => (
  <div className="w-full mb-4">
    <label className="font-bold text-[#808080]">{label}</label>
    <p className="text-black">{value}</p>
  </div>
);

const ProfileImage = ({ src, alt }: IProfileImage) => (
  <div className="w-3/12">
    <img
      src={src}
      alt={alt}
      className="rounded-full h-32 w-32 object-cover m-auto"
    />
  </div>
);

const ActionButton = ({ to, gradientDuoTone, children }: IActionButton) => (
  <Link to={to}>
    <Button outline gradientDuoTone={gradientDuoTone}>
      {children}
    </Button>
  </Link>
);

const PublicProfile = () => (
  <div className="flex justify-center items-center h-screen container p-4">
    <div className="flex flex-col justify-center items-center w-full lg:w-4/12">
      <div className="mb-8">
        <h3 className="text-lg lg:text-3xl text-black font-bold">
          Frontend Developer Test - IDWebHost
        </h3>
      </div>

      <div className="bg-[#F8F8F8] p-6 rounded-lg border border-gray-400 w-full">
        <div className="flex flex-row">
          <div className="w-9/12">
            <ProfileDetail label="Nama" value="Fathan Rohman" />
            <ProfileDetail label="Alamat" value="Jl. Cemerlang, Sukakarya, Warudoyong, Kota Sukabumi, Jawa Barat" />
            <ProfileDetail label="No HP" value="081282951768" />
            <ProfileDetail label="Email" value="karir.fathan@gmail.com" />
            <ProfileDetail label="Github" value="http://github.com/fathan" />
          </div>
          <ProfileImage src="https://avatars.githubusercontent.com/u/4404526?v=4" alt="Profile" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        <ActionButton to="/test-layout" gradientDuoTone="purpleToBlue">
          Test Layout
        </ActionButton>
        <ActionButton to="/test-layout-form" gradientDuoTone="cyanToBlue">
          Test Layout Form
        </ActionButton>
        <ActionButton to="/test-select" gradientDuoTone="greenToBlue">
          Test Select
        </ActionButton>
      </div>
    </div>
  </div>
);

export default PublicProfile;
