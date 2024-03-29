import { ThreeDots } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import { baseTheme } from 'theme';

const loaderModal = document.querySelector('#loadermodal-root');

export default function Loader() {
  return createPortal(
    <ThreeDots
      height="60"
      width="60"
      radius="9"
      color={baseTheme.colors.blue}
      wrapperStyle={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `${baseTheme.colors.overlayBcg}`,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      ariaLabel="three-dots-loading"
      wrapperClassName=""
      visible={true}
    />,
    loaderModal
  );
}
