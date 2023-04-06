import replyIcon from '/src/assets/images/icon-reply.svg';
import deleteIcon from '/src/assets/images/icon-delete.svg';
import editIcon from '/src/assets/images/icon-edit.svg';
import plusIcon from '/src/assets/images/icon-plus.svg';
import minusIcon from '/src/assets/images/icon-minus.svg';

class CommentsView {
	_data;
	parentCommentEle = document.querySelector('.comments-container');
	parentReplyEle = document.querySelector('main__replies-container');

	render(data) {
		this._data = data;
		console.log(this._data);
		const commentMarkUp = this._generateMarkUp();
		// console.log(commentMarkUp);
		this.parentCommentEle.insertAdjacentHTML('beforeend', commentMarkUp);
	}

	_generateMarkUp() {
		return this._data.map(this._commentsMarkUp).join('');
	}

	_commentsMarkUp(_data) {
		console.log(_data.replies);
		return `
		    <li>
		    <section class="comments-container__section">
		      <div class="comments-container__user">
		        <img class="comments-container__user-dp" src="${
							_data.user.image.png
						}" alt="user-dp">
		        <p class="comments-container__user-name">amyrobson</p>
		        <p class="comments-container__user-time">${_data.createdAt}</p>
		      </div>
		      <p class="comments-container__section-content">${_data.content}</p>
		      <div class="comments-container__section__vote">
                <button class="plus-btn">
                    <svg width="11" height="11">
                        <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                    </svg>
		        </button>
		        <p class="score">12</p>
                <button class="minus-btn">
                    <svg width="11" height="11" class="minus-icon">
                        <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/>
                    </svg>
                </button>
            </div>
		    <div class="comments-container__section__replyNmodify">
                <button class="replyBtn">
                    <img class="reply-logo" src="${replyIcon}" alt="reply-logo">
                    reply
                </button>
            </div>
		    </section>
		    <ul class="main__replies-container">
		      ${
						_data.replies.length > 0
							? _data.replies
									.map(
										(reply) =>
											`
               <li>
                   <section class="main__replies">
                     <div class="comments-container__user">
                       <img class="comments-container__user-dp" src="${reply.user.image.png}" alt="user-dp">
                       <p class="comments-container__user-name">${reply.user.username}</p>
                       <p class="comments-container__user-time">${reply.createdAt}</p>
                    </div>
                    <p class="comments-container__section-content">
                     <span class="reply-to-name">@${reply.replyingTo}</span> ${reply.content}
                    </p>
                    <div class="comments-container__section__vote">
                        <button class="plus-btn">
                            <svg width="11" height="11">
                                <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                            </svg>
                        </button>
                        <p class="score">${reply.score}</p>
                        <button class="minus-btn">
                            <svg width="11" height="11" class="minus-icon">
                                <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/>
                            </svg>
                        </button>
                    </div>
                   <div class="comments-container__section__replyNmodify">
                     <button class="replyBtn">
                       <img class="reply-logo" src="${replyIcon}" alt="reply-logo">
                       reply
                     </button>
                   </div>
                   </section>
                 </li>
              `
									)
									.join('')
							: ''
					}
		    </ul>
		  </li>
		    `;
	}
}

export default new CommentsView();