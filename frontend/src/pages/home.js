import { useEffect, useState } from "react";



const Home = () => {
    const [postStat, setPostStat] = useState(0);


    useEffect(() => {
        const fetchPostNumber = async () => {
            const response = await fetch('/stats/posts');
            const json = await response.json();
            if (response.ok) {
                setPostStat(json);
            }
        }

        fetchPostNumber();
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div class="card" span="width: 18rem;">
                            <div class="card-body">
                                <h3 class="card-title">Impact</h3>
                                <p class="card-text">Since the launch of the website, we received {postStat.posts} suggestions!</p>
                                <a href="#" class="card-link">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" span="width: 18rem;">
                            <div class="card-body">
                                <h3 class="card-title">Contribute</h3>
                                <p class="card-text">Learn about how you can make a difference and improve the quality of our software.</p>
                                <a href="#" class="card-link">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" span="width: 18rem;">
                            <div class="card-body">
                                <h3 class="card-title">Our Mission</h3>
                                <p class="card-text">Learn about our goals, mission, and impact, and different ways to help</p>
                                <a href="#" class="card-link">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;