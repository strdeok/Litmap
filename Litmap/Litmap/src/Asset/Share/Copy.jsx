import CopytoClipboard from "react-copy-to-clipboard";

export default function Copy(props) {
  const imgUrl = props.imgUrl;

  return (
    <CopytoClipboard
      text={imgUrl}
      onCopy={() => {
        alert("복사완료");
      }}
    >
      <button>클립보드에 복사하기</button>
    </CopytoClipboard>
  );
}
