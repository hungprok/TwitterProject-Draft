let textArea = document.getElementById("TweetInput");

let CountText = () => {
    let TweetInputRemain = 256 - textArea.value.length;
    if (TweetInputRemain === 0) {
        document.getElementById("charCount").innerHTML = `${TweetInputRemain} left`.fontcolor("red")
        alert("Dude! That's a lot of stuffs on your mind! Try Facebook instead!!!");
    } else { document.getElementById("charCount").innerHTML = `${TweetInputRemain} left` };
}
textArea.addEventListener("input", CountText);
let id = 0;
let sourceTweetData = [];
let childTweet = [];


let pushTweet = () => {
    let parentsid = null;
    let contentTweet = textArea.value;
    let aTweet = {
        id: id += 1,
        contents: contentTweet,
        name: "elon musk",
        email: "@elonmusk",
        likestatus: "",
        parentsid
    };
    sourceTweetData.unshift(aTweet);
    // console.log(aTweet);
    console.log(sourceTweetData);
    console.log("đang chạy push tweet");
    render(sourceTweetData, parentsid);
};


let shareTweet = (originaltweetid) => {
    console.log(originaltweetid);
    let aTweet = {
        id: id += 1,
        contents: "This is a reTweet",
        name: "elon musk",
        email: "@elonmusk",
        likestatus: "",
        parentsid: originaltweetid
    };
    sourceTweetData.unshift(aTweet);
    console.log(sourceTweetData);
    console.log("đã push dc retweet, cb chạy render");
    render(sourceTweetData, originaltweetid);
};

// let RenderReTweet = (item, parentsID) => {
//     console.log("chay function retweet");
//     let ParentsTweet = sourceTweetData.find((item) => item.ID === parentsID)
//     console.log(ParentsTweet);
//     return `
// <div class="card m-3 pb-3" style="border-radius: 15px;">
//     <div class=" row no-gutters ">
//         <div class="col-md-2 pl-4 pt-3" style="border-right: solid 1px whitesmoke;">
//             <div style=" width: 75px; height: 75px; background-color: aqua; border-radius: 50px;"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzCUrdNcBGV1DkgZrDxnb_alfTpdyVh_wVzYcPRPkd4xGtEZyc" class="card-img" alt="..." style="width: 100%; border-radius: 50px;"></div>
//         </div>
//         <div class="col-md-10 pl-0">
//             <div class="card-body pl-0 pt-4 pb-0 ">
//                 <h5 id="accountname" class="card-title ">${item.name}</h5>
//                 <h6 id="accountemail" class="card-title ">${item.email}</h6>
//             </div>
//         </div>
//         <div class="pl-4 pt-3">
//             <p class="card-text ">${item.contents}</p>
//             <p class="card-text "><small class="text-muted ">Last updated 3 mins ago</small></p>
//             <div class="">
//                 <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;"> <img src="https://webstockreview.net/images250_/instagram-clipart-cool-3.png" alt="" style="width: 15px"> This's lit!</button>
//                 <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;"> <img src="https://i.pinimg.com/originals/bf/7c/97/bf7c97be8f1b714b588642446c7a180c.gif" alt="" style="width: 15px;"> Not cool!</button>
//                 <button onclick="shareTweet(${item.ID})" type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;">Reply</button>
//                 <button onclick="shareTweet(${item.ID})" type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;">Everyone should see this</button>
//             </div>
//         </div>
//     </div>
//     <div class=" row no-gutters ">
//         <div class="col-md-1 d-flex justify-content-center pt-4">
//     </div>
//     <div class="col-md-11 pl-4 pb-4" style="border-left: solid 2px lightgray;">
//         <div class=" row no-gutters ">
//             <div class="col-md-2 pt-3">
//                 <div style=" width: 75px; height: 75px; background-color: aqua;border-radius: 50px;"><img src="https://i.ya-webdesign.com/images/designer-vector-avatar-2.png" class="card-img" alt="..." style="width: 100%;"></div>
//             </div>
//             <div class="col-md-10">
//                 <div class="card-body pl-0 pt-4 pb-0 ">
//                     <h5 class="card-title ">${ParentsTweet.name}</h5>
//                     <h6 class="card-title ">${ParentsTweet.email}</h6>
//                 </div>
//             </div>
//             <div class="pt-3 pr-4">
//                 <p class="card-text ">${ParentsTweet.contents}</p>
//                 <p class="card-text "><small class="text-muted ">Last updated 3 mins ago</small></p>
//                 <div class="">
//                     <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;"> <img src="https://webstockreview.net/images250_/instagram-clipart-cool-3.png" alt="" style="width: 15px"> This's lit!</button>
//                     <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;"> <img src="https://i.pinimg.com/originals/bf/7c/97/bf7c97be8f1b714b588642446c7a180c.gif" alt="" style="width: 15px"> Not cool!</button>
//                     <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;">Reply</button>
//                     <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;">Everyone should see this</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>`
// }


let render = (array, parentsid) => {
    let Originaltweetdisplay = array.map((item) => {
        if (parentsid != null) {
            console.log("chay function retweet");
            let ParentsTweet = sourceTweetData.find((item) => item.id === parentsid)
            console.log(ParentsTweet);
            return `
<div class="card m-3 pb-3" style="border-radius: 15px;">
    <div class=" row no-gutters ">
        <div class="col-md-2 pl-4 pt-3" style="border-right: solid 1px whitesmoke;">
            <div style=" width: 75px; height: 75px; background-color: aqua; border-radius: 50px;"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzCUrdNcBGV1DkgZrDxnb_alfTpdyVh_wVzYcPRPkd4xGtEZyc" class="card-img" alt="..." style="width: 100%; border-radius: 50px;"></div>
        </div>
        <div class="col-md-10 pl-0">
            <div class="card-body pl-0 pt-4 pb-0 ">
                <h5 id="accountname" class="card-title ">${item.name}</h5>
                <h6 id="accountemail" class="card-title ">${item.email}</h6>
            </div>
        </div>
        <div class="pl-4 pt-3">
            <p class="card-text ">${item.contents}</p>
            <p class="card-text "><small class="text-muted ">Last updated 3 mins ago</small></p>
            <div class="">
                <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;"> <img src="https://webstockreview.net/images250_/instagram-clipart-cool-3.png" alt="" style="width: 15px"> This's lit!</button>
                <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;"> <img src="https://i.pinimg.com/originals/bf/7c/97/bf7c97be8f1b714b588642446c7a180c.gif" alt="" style="width: 15px;"> Not cool!</button>
                <button onclick="shareTweet(${item.id})" type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;">Reply</button>
                <button onclick="shareTweet(${item.id})" type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;">Everyone should see this</button>
            </div>
        </div>
    </div>
    <div class=" row no-gutters ">
        <div class="col-md-1 d-flex justify-content-center pt-4">
    </div>
    <div class="col-md-11 pl-4 pb-4" style="border-left: solid 2px lightgray;">
        <div class=" row no-gutters ">
            <div class="col-md-2 pt-3">
                <div style=" width: 75px; height: 75px; background-color: aqua;border-radius: 50px;"><img src="https://i.ya-webdesign.com/images/designer-vector-avatar-2.png" class="card-img" alt="..." style="width: 100%;"></div>
            </div>
            <div class="col-md-10">
                <div class="card-body pl-0 pt-4 pb-0 ">
                    <h5 class="card-title ">${ParentsTweet.name}</h5>
                    <h6 class="card-title ">${ParentsTweet.email}</h6>
                </div>
            </div>
            <div class="pt-3 pr-4">
                <p class="card-text ">${ParentsTweet.contents}</p>
                <p class="card-text "><small class="text-muted ">Last updated 3 mins ago</small></p>
                <div class="">
                    <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;"> <img src="https://webstockreview.net/images250_/instagram-clipart-cool-3.png" alt="" style="width: 15px"> This's lit!</button>
                    <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;"> <img src="https://i.pinimg.com/originals/bf/7c/97/bf7c97be8f1b714b588642446c7a180c.gif" alt="" style="width: 15px"> Not cool!</button>
                    <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;">Reply</button>
                    <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;">Everyone should see this</button>
                </div>
            </div>
        </div>
    </div>
</div>`
        } ///////////////////////////
        // else if (parentsid = null) {
        console.log("chạy render normal Tweet");
        return `
    <div class="card m-3 pb-3" style="border-radius: 15px;">
        <div class=" row no-gutters ">
            <div class="col-md-2 pl-4 pt-3" style="border-right: solid 1px whitesmoke;">
                <div style=" width: 75px; height: 75px; background-color: aqua; border-radius: 50px;"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzCUrdNcBGV1DkgZrDxnb_alfTpdyVh_wVzYcPRPkd4xGtEZyc" class="card-img" alt="..." style="width: 100%; border-radius: 50px;"></div>
            </div>
            <div class="col-md-10 pl-0">
                <div class="card-body pl-0 pt-4 pb-0 ">
                    <h5 id="accountname" class="card-title ">${item.name}</h5>
                    <h6 id="accountemail" class="card-title ">${item.email}</h6>
                </div>
            </div>
            <div class="pl-4 pt-3">
                <p class="card-text ">${item.contents}</p>
                <p class="card-text "><small class="text-muted ">Last updated 3 mins ago</small></p>
                <div class="">
                    <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;"> <img src="https://webstockreview.net/images250_/instagram-clipart-cool-3.png" alt="" style="width: 15px"> This's lit!</button>
                    <button type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;"> <img src="https://i.pinimg.com/originals/bf/7c/97/bf7c97be8f1b714b588642446c7a180c.gif" alt="" style="width: 15px;"> Not cool!</button>
                    <button onclick="shareTweet(${item.id})" type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;">Reply</button>
                    <button onclick="shareTweet(${item.id})" type="button" class="btn btn-outline-primary btn-lg" style="font-size: 13px;">Everyone should see this</button>
                </div>
            </div>
        </div>
    </div>`
            // }
    }).join("");
    console.log(Originaltweetdisplay);
    document.getElementById("tweetdisplayarea").innerHTML = Originaltweetdisplay;
}