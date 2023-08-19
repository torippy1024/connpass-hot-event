const BorderSlider = ({
  borderNum,
  setBorderNum,
}: {
  borderNum: number;
  setBorderNum: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div>
      <div className='flex justify-between items-center text-sm'>
        <div>参加人数</div>
        <div>
          <span className='text-base'>{borderNum}</span>人以上
        </div>
      </div>
      <input
        type='range'
        min={0}
        max='50'
        value={borderNum}
        className='range range-primary'
        step='5'
        onChange={(e) => setBorderNum(Number(e.target.value))}
      />
    </div>
  );
};

export default BorderSlider;
