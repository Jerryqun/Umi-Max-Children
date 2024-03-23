import Demo from '@/pages/Demo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default (props: any) => {
  console.log('props: ', props);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="deopCmd/demo" element={<Demo />}></Route>{' '}
      </Routes>
    </BrowserRouter>
  );
};
