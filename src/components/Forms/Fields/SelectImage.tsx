import React, { useCallback, useState } from 'react';

import './Formix.scss';

type Props = {
  logo: string | undefined;
  label: string | undefined;
  title: string | undefined;
  logoSize: number;
}

const SelectImage: React.FC<Props> = ({
  logo,
  label,
  title = 'New logo',
  logoSize = 40,
}): JSX.Element => {
  const [newImageURL, setNewImageURL] = useState('');

  const selectImage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { files } = event.target as HTMLInputElement;
    if (files && files.length > 0) {
      setNewImageURL(URL.createObjectURL(files[0]));
    }
  }, []);

  return (
    <label htmlFor="select_image" className="selectFile">

      <img
        src={newImageURL || logo || '/src/assets/icon_svg/club_logo.svg'}
        alt={title}
        title={title}
        width={logoSize}
      />

      <input
        id="select_image"
        type="file"
        accept="image/*"
        data-value={newImageURL}
        onChange={selectImage}
        className="selectFile_input"
      />
      <span className="selectFile_label">
        {label}
      </span>
    </label>
  );
};

export default SelectImage;
