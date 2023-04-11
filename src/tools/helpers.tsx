export const splitToSpans = (text: string, delimeter: string) => {
  return (
    <>
      {text.split(delimeter).map((letter: string, idx: any) => (
        <span key={idx}>{letter}</span>
      ))}
    </>
  );
};
