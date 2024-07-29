import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Button } from "flowbite-react";

import {
  useAppDispatch,
  useAppSelector
} from '../../../redux/hooks';
import { 
  setSelectedProvince, 
  setSelectedRegion, 
  setSelectedDistrict, 
  setSelectedVillage, 
  setNavbarName,
  reset
} from '../../../redux/features/appSlice';
import { 
  getProvinces, 
  getRegencies, 
  getDistricts, 
  getVillages 
} from '../../../services/location';
import AtomDropdown from '../../../components/atoms/AtomDropdown';

interface IOption {
  label: string;
  value: string;
}

const OrganismFilter = () => {
  const dispatch = useAppDispatch();
  const selectedProvince = useAppSelector(state => state.app.selectedProvince);
  const selectedRegion = useAppSelector(state => state.app.selectedRegion);
  const selectedDistrict = useAppSelector(state => state.app.selectedDistrict);
  const selectedVillage = useAppSelector(state => state.app.selectedVillage);

  const { data: provinces } = useQuery('provinces', getProvinces, { refetchOnWindowFocus: false });
  const { data: regencies, refetch: refetchRegencies } = useQuery(
    ['regencies', selectedProvince],
    () => getRegencies(selectedProvince as number),
    { enabled: !!selectedProvince, refetchOnWindowFocus: false }
  );
  const { data: districts, refetch: refetchDistricts } = useQuery(
    ['districts', selectedRegion],
    () => getDistricts(selectedRegion as number),
    { enabled: !!selectedRegion, refetchOnWindowFocus: false }
  );
  const { data: villages, refetch: refetchVillages } = useQuery(
    ['villages', selectedDistrict],
    () => getVillages(selectedDistrict as number),
    { enabled: !!selectedDistrict, refetchOnWindowFocus: false }
  );

  const provinceOptions: IOption[] = provinces?.data.map((item: any) => ({ label: item.name, value: item.id })) || [];
  const regencyOptions: IOption[] = regencies?.data.map((item: any) => ({ label: item.name, value: item.id })) || [];
  const districtOptions: IOption[] = districts?.data.map((item: any) => ({ label: item.name, value: item.id })) || [];
  const villageOptions: IOption[] = villages?.data.map((item: any) => ({ label: item.name, value: item.id })) || [];

  useEffect(() => {
    initialize();
  }); 

  useEffect(() => {
    if (selectedProvince) refetchRegencies();
  }, [selectedProvince, refetchRegencies]);

  useEffect(() => {
    if (selectedRegion) refetchDistricts();
  }, [selectedRegion, refetchDistricts]);

  useEffect(() => {
    if (selectedDistrict) refetchVillages();
  }, [selectedDistrict, refetchVillages]);

  const initialize = () => {
    dispatch(setNavbarName('Layout 3'));
  };

  const handleDropdownChange = (dropdownType: string, value: number | undefined) => {
    switch (dropdownType) {
      case 'province':
        dispatch(setSelectedProvince(value));
        break;
      case 'region':
        dispatch(setSelectedRegion(value));
        break;
      case 'district':
        dispatch(setSelectedDistrict(value));
        break;
      case 'village':
        dispatch(setSelectedVillage(value));
        break;
      default:
        break;
    }
  };

  const resetFilters = () => {
    dispatch(reset());
  };
  
  return (
    <div className='bg-[#F5F5F5] border border-gray-200 rounded-lg px-4 py-10'>
      <>
        <div className='font-bold text-xl text-[#1F2937] mb-6'>
          Filter
        </div>
      </>
      <>
        <h3 className='text-base font-semibold mb-2'>Provinsi</h3>
        <AtomDropdown
          options={provinceOptions}
          placeholder="Pilih Provinsi"
          value={selectedProvince}
          onChange={(value: any) => handleDropdownChange('province', value)}
        />
      </>
      <>
      <h3 className='text-sm font-semibold mt-3 mb-2'>Kota/Kabupaten</h3>
        <AtomDropdown
          options={regencyOptions}
          placeholder="Pilih Kota/Kabupaten"
          disabled={!selectedProvince}
          value={selectedRegion}
          onChange={(value: any) => handleDropdownChange('region', value)}
        />
      </>
      <>
        <h3 className='text-sm font-semibold mt-3 mb-2'>Kecamatan</h3>
        <AtomDropdown
          options={districtOptions}
          placeholder="Pilih Kecamatan"
          disabled={!selectedRegion}
          value={selectedDistrict}
          onChange={(value: any) => handleDropdownChange('district', value)}
        />
      </>
      <>
        <h3 className='text-sm font-semibold mt-3 mb-2'>Kelurahan/Desa</h3>
        <AtomDropdown
          options={villageOptions}
          placeholder="Pilih Kelurahan/Desa"
          disabled={!selectedDistrict}
          value={selectedVillage}
          onChange={(value: any) => handleDropdownChange('village', value)}
        />
      </>
      <>
        <Button color="blue" className='mt-5 w-full' onClick={resetFilters}>
          Reset Filters
        </Button>
      </>
    </div>
  )
};

export default OrganismFilter;
