import logo from '../../media/logo192.png'

export const Header = () => {
  return (
    <div className='flex h-20 justify-between items-center'>
        <img className='max-h-full' src={logo} />
        <input type='search' placeholder='Search' />
        <nav className='flex items-center'>
            <ul>
                <li><a href="#">Assets</a></li>
            </ul>
        </nav>
    </div>
  );
};
