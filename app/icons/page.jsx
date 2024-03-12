import { Icon } from "@/app/Components/Icons/Icons";

const icons = [
	"home",
	"bell",
	"bell-dot",
	"bell-check",
	"compass",
	"doller-earn",
	"logout",
	"message",
	"public-access",
	"settings",
	"wallet",
	"ai-image",
	"user",
	"user-plus",
	"user-plus-alt",
	"user-check",
	"user-edit",
	"user-circle",
	"user-heart",
	"user-block",
	"user-card",
	"search",
	"search-alt",
	"arrow-left",
	"arrow-right",
	"heart",
	"heart-alt",
	"bookmark",
	"swap",
	"quest",
	"history",
	"hand-mike",
	"hand-mike-alt",
	"globe",
	"verify",
	"content",
	"gender",
	"image",
	"price",
	"payment",
	"privacy",
	"question",
	"ellipsis",
	"camera-plus",
	"share",
	"rocket",
	"trash",
	"trash-circle",
	"flag",
	"document",
	"check-circle",
	"vault",
	"queue",
	"statistics",
	"statistics-alt",
	"document-list",
	"earning",
	"giftbox",
	"star",
	"dollar-cursor",
	"eye",
	"eye-slash",
	"renewal",
	"plus",
	"plus-circle",
	"selfie",
	"messanger",
	"bank",
	"settings-alt",
	"folder-lock",
	"ai",
	"message-alt",
	"sliders-horizontal",
	"history-alt",
	"alert",
	"x-circle",
	"arrow-left-circle",
	"basket",
	"card-plus",
	"cloud-up",
	"time",
	"pencil-square",
];

export default function Icons() {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-2 p-5 md:gap-4 md:p-10">
			{icons.map((icon, index) => (
				<div key={index} className="flex flex-col items-center rounded-xl border p-4 text-center">
					<Icon name={icon} className="size-8" />
					<p className="mt-2 text-sm">{icon}</p>
				</div>
			))}
		</div>
	);
}
