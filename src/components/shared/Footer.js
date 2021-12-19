export default function Footer() {
    return (
        <footer class='bg-dark text-center text-white'>
            <hr />
            {/* <!-- Grid container --> */}
            <div class='container p-4'>
                {/* <!-- Section: Technologies and Database--> */}
                <section class='mb-4'>
                    <div class='mb-4'>
                        <h5 class='text-uppercase'>Technologies</h5>
                        <li style={{ 'font-size': '25px' }}>
                            <i class="fab fa-react"></i>
                            <i style={{ 'margin-left': '5px' }} class="fab fa-css3"></i>
                            <i style={{ 'margin-left': '5px' }} class="fab fa-bootstrap"></i>
                        </li>
                        <br />
                        <h5 class='text-uppercase'>Database</h5>
                        <li>
                            <img src="/mongoDB.png" alt="" />
                            <img style={{ 'margin-left': '5px', 'padding-top': '10px' }} src="/mongoose.png" alt="" />
                        </li>
                    </div>
                    {/* <!-- Linkedin --> */}
                    {/* <a class='btn btn-outline-light btn-floating m-1' href='#!' role='button'
                    ><i class='fab fa-linkedin-in'></i
                    ></a> */}

                    {/* <!-- Github --> */}
                    {/* <a class='btn btn-outline-light btn-floating m-1' href='#!' role='button'
                    ><i class='fab fa-github'></i
                    ></a> */}

                    {/* <a class='btn btn-outline-light btn-floating m-1' href='#!' role='button'
                    ><i class='fab fa-github'></i
                    ></a> */}
                </section>
                {/* <!-- Section: Info --> */}
                <section class='mb-4'>
                    <p style={{ 'padding-left': '100px', 'padding-right': '100px' }}>
                        Launched in 2021, DevXchange was built by three software engineers who came together
                        to develop a full-stack CRUD application and provide a public platform for users
                        to share their knowledge and collaborate on coding problems. Visit <a style={{ 'text-decoration': 'none', 'color': '#055861' }} href="https://github.com/paulinal3/devXchange-client">GitHub</a> to learn more about it.
                    </p>
                </section>
                {/* <!-- Section: Contributors --> */}
                <section class='row'>
                    <div class='col'>
                        <h5 class='text-uppercase'>Christos Miltiadou</h5>
                        <ul class='list-unstyled mb-0'>
                            <li>
                                <a href='https://www.linkedin.com/in/christos-miltiadou/' class='text-white' target='_blank' rel='noopener noreferrer'>
                                    <i class="fab fa-linkedin"></i></a>
                                <a style={{ 'margin-left': '5px' }} href='https://github.com/cmiltiadou' class='text-white' target='_blank' rel='noopener noreferrer'>
                                    <i class="fab fa-github"></i></a>
                            </li>
                            {/* <li>
                                    <a href='#!' class='text-white' target='_blank' rel='noopener noreferrer'>Portfolio</a>
                                </li> */}
                            <li>
                                cmiltiad@gmail.com
                            </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}
                    <div class='col'>
                        <h5 class='text-uppercase'>Galyver Asi</h5>

                        <ul class='list-unstyled mb-0'>
                            <li>
                                <a href='https://www.linkedin.com/in/galyverasi/' class='text-white' target='_blank' rel='noopener noreferrer'>
                                    <i class="fab fa-linkedin"></i></a>
                                <a style={{ 'margin-left': '5px' }} href='https://github.com/galyverasi' class='text-white' target='_blank' rel='noopener noreferrer'>
                                    <i class="fab fa-github"></i></a>
                            </li>
                            {/* <li>
                                    <a href='#!' class='text-white' target='_blank' rel='noopener noreferrer'>Portfolio</a>
                                </li> */}
                            <li>
                                galyverasi@gmail.com
                            </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div class='col'>
                        <h5 class='text-uppercase'>Paulina Le</h5>

                        <ul class='list-unstyled mb-0'>
                            <li>
                                <a href='https://www.linkedin.com/in/paulinal3/' class='text-white' target='_blank' rel='noopener noreferrer'>
                                    <i class="fab fa-linkedin"></i></a>
                                <a style={{ 'margin-left': '5px' }} href='https://github.com/paulinal3' class='text-white' target='_blank' rel='noopener noreferrer'>
                                    <i class="fab fa-github"></i></a>
                            </li>
                            {/* <li>
                                    <a href='#!' class='text-white' target='_blank' rel='noopener noreferrer'>Portfolio</a>
                                </li> */}
                            <li>
                                paulinal3@outlook.com
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            {/* <!-- Grid container --> */}
            <div class='text-center p-3' styles='background-color: rgba(0, 0, 0, 0);'>
                <p>Created by Solo Tres <i class="far fa-copyright"></i> 2021</p>
            </div>
        </footer>
    )
}
