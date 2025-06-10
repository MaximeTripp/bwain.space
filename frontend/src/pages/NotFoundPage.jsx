import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h-96'>
      <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
      <h1 className='text-gray-500 dark:text-gray-400 text-6xl font-bold mb-4'>404 Not Found</h1>
      <p className='font-light text-gray-500 dark:text-gray-400 text-xl mb-5'>This page does not exist</p>
      <Link
        to='/'
        className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;