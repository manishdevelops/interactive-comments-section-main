import amyrobsonDP from '/src/assets/images/avatars/image-amyrobson.png';
import maxblagunDP from '/src/assets/images/avatars/image-maxblagun.png';
import ramsesmironDP from '/src/assets/images/avatars/image-ramsesmiron.png';
import juiliusomoDP from '/src/assets/images/avatars/image-juliusomo.png';

export const state = {
	currentUser: {
		image: {
			png: juiliusomoDP,
		},
		username: 'juliusomo',
	},

	replyToUser: {
		replyToUsername: '',
	},

	comments: [
		{
			content:
				"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
			createdAt: '1 month ago',
			score: 12,
			user: {
				image: {
					png: amyrobsonDP,
				},
				username: 'amyrobson',
			},
			replies: [],
		},
		{
			content:
				"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
			createdAt: '2 weeks ago',
			score: 5,
			user: {
				image: {
					png: maxblagunDP,
				},
				username: 'maxblagun',
			},
			replies: [
				{
					content:
						"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
					createdAt: '1 week ago',
					score: 4,
					replyingTo: 'maxblagun',
					user: {
						image: {
							png: ramsesmironDP,
						},
						username: 'ramsesmiron',
					},
				},
				{
					content:
						"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
					createdAt: '2 days ago',
					score: 2,
					replyingTo: 'ramsesmiron',
					user: {
						image: {
							png: juiliusomoDP,
						},
						username: 'juliusomo',
					},
				},
			],
		},
	],
};
