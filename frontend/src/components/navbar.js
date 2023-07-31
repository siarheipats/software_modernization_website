import { Link } from 'react-router-dom'

import logo from './img/logo.png'
import PostAddIcon from '@mui/icons-material/PostAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
import AssistantIcon from '@mui/icons-material/Assistant';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" >
            <div class="container-fluid">
                <Link to="/">
                    <a class="navbar-brand"><img src={logo} alt="Logo" width="330" height="40" class="d-inline-block align-text-top"></img></a>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/post_add">
                                <a class="nav-link active" aria-current="page">
                                    <PostAddIcon />
                                    Post Suggestion
                                </a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/posts">
                                <a class="nav-link">
                                    <ListAltIcon />
                                    View Suggestions
                                </a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/posts">
                                <a class="nav-link">
                                    <AssistantIcon />
                                    My Suggestions
                                </a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/search">
                                <a class="nav-link">
                                    <SearchIcon />
                                    Search
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;