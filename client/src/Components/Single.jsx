import react from 'react';
import {useLocation} from 'react-router';
import '../styles/single.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Context} from '../context/Context.js';
function Single()
{
  const [blog,setblog]=react.useState([]);
  const[update,setupdate]=react.useState(false);
  const[title,settitle]=react.useState("")
  const[desc,setdec]=react.useState("")
  const id=useLocation();
  const loc=id.pathname.split("/")[2]
  const usern=blog.username;
  const {user}=react.useContext(Context);
  const folder="http://localhost:5000/pictures/"
  console.log(blog.photo);
  console.log(usern)
  react.useEffect(()=>{
   const fetchSingle=async ()=>{
    await axios.get("/blogs/"+ loc)
    .then((res)=>{
     setblog(res.data);
    })
    console.log(blog);
   }
   fetchSingle()
  },[loc])

  const hupdate=async ()=>{
   try{
    await axios.put(`/blogs/${blog._id}`,{
      username:usern,
      title,
      desc
    })
    setupdate(false);
   }
   catch(err)
   {
    console.log(err);
   }
  }
    return(
 <>
   <div className="singlePost">
      <div className="singlePostWrapper">

        <img
          className="singlePostImg"
          src={folder+blog.photo}
          alt=""
        />
        {update?(<input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => settitle(e.target.value)}
          />):(
        <h1 className="singlePostTitle">
          {blog.title}
          {usern===user&&(
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"  onClick={() => setupdate(true)}></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
)}
        </h1>
        )}
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link to={`/?user=${usern}`}>
                {blog.username}
              </Link>
            </b>
          </span>
          <span>{new Date(blog.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
         {blog.description}
        </p>
        {update && (
          <button className="singlePostButton" onClick={hupdate}>
            Update
          </button>
        )}
      </div>
    </div>
    <br></br>
    <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-center row">
            <div class="d-flex flex-column col-md-8">
                
                <div class="coment-bottom bg-white p-2 px-4">
                    <div class="d-flex flex-row add-comment-section mt-4 mb-4"><input type="text" class="form-control mr-3" placeholder="Add comment"/><button class="btn btn-primary" type="button">Comment</button></div>
                    <div
                        class="commented-section mt-2">
                        <div class="d-flex flex-row align-items-center commented-user">
                            <h5 class="mr-2">Corey oates</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">4 hours ago</span></div>
                        <div class="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                        <div
                            class="reply-section">
                            <div class="d-flex flex-row align-items-center voting-icons"><i class="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i class="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span class="ml-2">10</span><span class="dot ml-2"></span>
                                <h6 class="ml-2 mt-1">Reply</h6>
                            </div>
                </div>
            </div>
            <div class="commented-section mt-2">
                <div class="d-flex flex-row align-items-center commented-user">
                    <h5 class="mr-2">Samoya Johns</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">5 hours ago</span></div>
                <div class="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</span></div>
                <div class="reply-section">
                    <div class="d-flex flex-row align-items-center voting-icons"><i class="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i class="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span class="ml-2">15</span><span class="dot ml-2"></span>
                        <h6 class="ml-2 mt-1">Reply</h6>
                    </div>
                </div>
            </div>
            <div class="commented-section mt-2">
                <div class="d-flex flex-row align-items-center commented-user">
                    <h5 class="mr-2">Makhaya andrew</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">10 hours ago</span></div>
                <div class="comment-text-sm"><span>Nunc sed id semper risus in hendrerit gravida rutrum. Non odio euismod lacinia at quis risus sed. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Enim facilisis gravida neque convallis a. In mollis nunc sed id. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Ultrices mi tempus imperdiet nulla malesuada pellentesque.</span></div>
                <div
                    class="reply-section">
                    <div class="d-flex flex-row align-items-center voting-icons"><i class="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i class="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span class="ml-2">25</span><span class="dot ml-2"></span>
                        <h6 class="ml-2 mt-1">Reply</h6>
                    </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
 </>
    )
}

export default Single;