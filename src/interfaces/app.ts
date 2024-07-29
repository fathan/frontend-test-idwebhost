export interface IBaseLocation {
  id: number;
  name: string;
}

export interface IProvince extends IBaseLocation {}

export interface IRegency extends IBaseLocation {}

export interface IDisctrict extends IBaseLocation {}

export interface IVillage extends IBaseLocation {}