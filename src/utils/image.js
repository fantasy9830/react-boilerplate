/**
 * 等比例縮放圖片
 * @param {File|Blob} file - 圖片檔案
 * @param {int} maxWidth - 最大寬度
 * @param {int} maxHeight - 最大高度
 */
export const resize = (file, maxWidth = 1024, maxHeight = 1024) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = new Image();

    image.src = URL.createObjectURL(file);
    image.onerror = reject;
    image.onload = () => {
      URL.revokeObjectURL(image.src);

      const originWidth = image.width;
      const originHeight = image.height;
      const aspectRatio = originWidth / originHeight;
      let targetWidth = originWidth;
      let targetHeight = originHeight;

      if (originWidth > maxWidth || originHeight > maxHeight) {
        if (maxHeight * aspectRatio > maxWidth) {
          targetWidth = maxWidth;
          targetHeight = Math.round(maxWidth / aspectRatio);
        } else {
          targetWidth = Math.round(maxHeight * aspectRatio);
          targetHeight = maxHeight;
        }
      }

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      context.clearRect(0, 0, targetWidth, targetHeight);
      context.drawImage(image, 0, 0, targetWidth, targetHeight);

      canvas.toBlob(
        blob => resolve(new File([blob], file.name, { type: file.type })),
        file.type,
      );
    };
  });
};

/**
 * blob 轉成 dataURL
 * @param {Blob} blob - 圖片檔案
 */
export const blobtoDataURL = blob => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onerror = reject;
    reader.onload = event => {
      resolve(event.target.result);
    };
  });
};
