import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <h1>This is the content to print</h1>
    <p>Only this content will be printed.</p>
  </div>
));

const PrintComponent = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print Content</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default PrintComponent;
