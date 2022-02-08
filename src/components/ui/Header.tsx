import logo from '../../media/logo192.png'

export const Header = () => {
  return (
    <div className='flex h-20 justify-between items-center px-5 py-2 shadow-md'>
      <img className='max-h-full' alt="logo" src={logo} />
      <input type='search' placeholder='Search for assets' className='border-[1px] rounded p-2 w-[600px]' />
      <nav className='flex items-center'>
        <ul>
          <li><a href="#" className='font-bold'>Assets</a></li>
        </ul>
      </nav>
    </div>
  );
};
