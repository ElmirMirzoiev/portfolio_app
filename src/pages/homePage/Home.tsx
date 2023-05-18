import { FC } from "react"
import { NavLink } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import s from "./Home.module.scss"
import c from "../../common/styles/Container.module.scss"
import PhotoBlock from "./photoBlock/PhotoBlock"
import { BlockTitle } from "../../common/blockTitle/BlockTitle"
import { MainData } from "../../DATA/MainComponenetData"
import { IconsBlock } from "./icons/IconsBlock"

export const Home: FC = () => {
	const animatedTitleElements = MainData.animatedTitle.map(t => {
		return (
			<h3 key={t.id} className={s.animatedTextTitle}>
				{t.title}
			</h3>
		)
	})
	const linkElements = MainData.link.map(l => {
		return (
			<NavLink key={l.id} to={l.path} className={s.mainButton}>
				<span className={s.mainBtnText}>{l.title}</span>
				<div className={s.iconArrow}>
					<ArrowForwardIcon />
				</div>
			</NavLink>
		)
	})

	return (
		<div className={c.container}>
			<div className={s.mainContent}>
				<div className={s.mainPhoto}>
					<PhotoBlock />
				</div>
				<div className={s.greetingBlock}>
					<BlockTitle
						introText={MainData.blockTitle.intro}
						title={MainData.blockTitle.title}
					/>
					<div className={s.animatedText}>{animatedTitleElements}</div>
					<IconsBlock data={MainData.icons} />
					<p className={s.greetingText}>{MainData.greetingBlockText}</p>
					<div className={s.buttonsBlock}>{linkElements}</div>
				</div>
			</div>
		</div>
	)
}
