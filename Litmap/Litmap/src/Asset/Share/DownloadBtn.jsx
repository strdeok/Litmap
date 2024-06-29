import React, { useEffect, useState } from "react";
import {
  Panel,
  useReactFlow,
  getRectOfNodes,
  getTransformForBounds,
} from "reactflow";
import { toPng } from "html-to-image";

function DownloadButton(props) {
  const { getNodes } = useReactFlow();
  const imageWidth = 1024;
  const imageHeight = 768;
  const imgUrl = props.imgUrl;
  const setUrl = props.setUrl;

  /* 이미지 다운 */
  function downloadImage(dataUrl) {
    const a = document.createElement("a");
    a.setAttribute("download", "reactflow.png");
    a.setAttribute("href", dataUrl);
    a.click();
  }

  /* html to png */
  function ImgtoPng() {
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );

    toPng(document.querySelector(".react-flow__viewport"), {
      backgroundColor: "white", // 템플릿 변경시 수정
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth,
        height: imageHeight,
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
    })
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl; // img태그의 src에 저장
        setUrl([img, img.src]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  /* 다운버튼 클릭 시 */
  const onClick = () => {
    downloadImage(imgUrl);
  };

  useEffect(() => {
    ImgtoPng();
  });

  return (
    <button
      className="download-btn"
      onClick={
        // DownImg
        console.log(imgUrl)
      }
    >
      png로 저장
    </button>
  );
}

export default DownloadButton;
