import chef from '../../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className='relative my-24'>
            <img className='h-[576px] object-cover' src={chef} alt="chef-service" />
            <div className='bg-white absolute top-28 bottom-28 left-28 right-28 flex flex-col justify-center items-center'>
                <h3 className='text-4xl tex mb-4 tracking-wide uppercase'>Bistro Boss</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione <br /> dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil <br /> iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default ChefService;