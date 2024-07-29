import { AxiosResponse } from "axios";
import api from "./_api";

const getProvinces = async (): Promise<AxiosResponse<any, any>> => {
  let uri: string = '/public/api/v1/reference/provinces';
  const request = await api.get(uri);
  return request;
};

const getRegencies = async (provinceId: number): Promise<AxiosResponse<any, any>> => {
  let uri: string = `/public/api/v1/reference/regencies_of/${provinceId}`;
  const request = await api.get(uri);
  return request;
};

const getDistricts = async (regencyId: number): Promise<AxiosResponse<any, any>> => {
  let uri: string = `/public/api/v1/reference/districts_of/${regencyId}`;
  const request = await api.get(uri);
  return request;
};

const getVillages = async (districtId: number): Promise<AxiosResponse<any, any>> => {
  let uri: string = `/public/api/v1/reference/villages_of/${districtId}`;
  const request = await api.get(uri);
  return request;
};

export {
  getProvinces,
  getRegencies,
  getDistricts,
  getVillages
}