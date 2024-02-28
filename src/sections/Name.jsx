import '../../public/css/globalStyle.css'
import image from '../../public/images/OIG2.jpeg'
export function Name() {
    return (
        <section className='jn-NameSection'>
            <div className='jn-Container'>
                <div className='jn-ContainerImg'>
                    <img src={image} alt="image" className="jn-Image" />
                </div>
                <div className='jn-ContainerName'>
                    <h1>Jo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, perferendis quas? Odit modi a non tenetur quasi laboriosam sunt consectetur placeat cupiditate, aspernatur in autem dignissimos temporibus animi sint repellendus. Praesentium sunt at asperiores pariatur aliquid ducimus sed labore unde aperiam voluptatibus quas esse reprehenderit, hic delectus. Odit, accusamus officiis.lorem</p>
                    <div>
                        <p>links</p>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    )
}