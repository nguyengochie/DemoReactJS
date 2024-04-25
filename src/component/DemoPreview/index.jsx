import React, { useEffect, useState } from 'react';

const DemoPreview = () => {
  const [avatar, setAvatar] = useState(undefined);

  useEffect(() => {
    return () => {
      if (avatar) URL.revokeObjectURL(avatar?.preview);
    };
  }, [avatar]);

  const handleChooseFile = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <div>
      <input type="file" onChange={handleChooseFile} />
      {avatar && <img src={avatar?.preview} alt="preview" />}
    </div>
  );
};

export default DemoPreview;
