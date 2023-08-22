import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"

const FeatureList = [
	{
		title: "Лёгок в использовании",
		description: (
			<>
				При разработке Telehooper'а большое внимание уделялось удобству пользования ботом.
			</>
		)
	},
	{
		title: "Открытость и прозрачность",
		description: (
			<>
				Исходный код бота Telehooper является публичным, и любой может не только посмотреть его, но и запустить бота на своём личном сервере.
			</>
		)
	}
]

function Feature({ title, description }) {
	return (
		<div className={clsx("col col--3")}>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row" style={{justifyContent: "center"}}>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}
