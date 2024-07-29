import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { setNavbarName } from '../../../redux/features/appSlice';

import { Button } from "flowbite-react";
import AtomTextInput from '../../atoms/AtomTextInput';
import AtomDropdown from '../../atoms/AtomDropdown';

const TestLayoutForm = () => {
  const [text, setText] = useState('');

  const options = [
    { label: '2020', value: '2020' },
    { label: '2021', value: '2021' },
    { label: '2022', value: '2022' }
  ];

  const dispatch = useAppDispatch();

  const initialize = () => {
    dispatch(setNavbarName('Layout 2'));
  };

  useEffect(() => {
    initialize();
  }); 

  return (
    <>
      <div className="p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-row gap-4 sm:justify-between lg:justify-normal lg:w-6/12">
            <div className="w-4/12 sm:w-3/12 lg:w-4/12">
              <Button color="dark" fullSized>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.25 9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75H9.75V14.25H8.25V9.75Z" fill="white"/>
                </svg>
                Tambah
              </Button>
            </div>
            <div className="flex gap-4 w-8/12 sm:w-4/12 lg:w-8/12">
              <Button color="gray" fullSized>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L5.25 8.25L6.3 7.1625L8.25 9.1125V3H9.75V9.1125L11.7 7.1625L12.75 8.25L9 12ZM4.5 15C4.0875 15 3.73438 14.8531 3.44063 14.5594C3.14688 14.2656 3 13.9125 3 13.5V11.25H4.5V13.5H13.5V11.25H15V13.5C15 13.9125 14.8531 14.2656 14.5594 14.5594C14.2656 14.8531 13.9125 15 13.5 15H4.5Z" fill="#2C2C2C"/>
                </svg>

                Import
              </Button>
              <Button color="gray" fullSized>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.25 12V5.8875L6.3 7.8375L5.25 6.75L9 3L12.75 6.75L11.7 7.8375L9.75 5.8875V12H8.25ZM4.5 15C4.0875 15 3.73438 14.8531 3.44063 14.5594C3.14688 14.2656 3 13.9125 3 13.5V11.25H4.5V13.5H13.5V11.25H15V13.5C15 13.9125 14.8531 14.2656 14.5594 14.5594C14.2656 14.8531 13.9125 15 13.5 15H4.5Z" fill="#2C2C2C"/>
                </svg>

                Export
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="w-full lg:w-6/12">
            <AtomTextInput
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="search"
            />
            </div>
            <div className="w-full lg:w-6/12">
              <AtomDropdown options={options} placeholder="Choose Year" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestLayoutForm;