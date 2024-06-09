<template>
	<view class="a">
		<text class="i"></text>
		<text class="i"></text>
		<text class="span">{{ text }}</text>
	</view>
</template>

<script setup>
import { toRefs } from 'vue'
const props = defineProps({
	text: String
})
const { text } = toRefs(props)
</script>

<style lang="less">
.a,
.i,
.span {
	box-sizing: border-box;
}

.a {
	position: relative;
	width: 300rpx;
	height: 110rpx;
	display: inline-block;
	border-radius: 10rpx;
	margin-bottom: 30rpx;
}

.a .i {
	position: absolute;
	inset: -4rpx;
	display: block;
	border-radius: 10rpx;
}

.a .i,
.a .i:nth-child(2) {
	animation: gradient 1.5s linear infinite;
	animation-fill-mode: both;

	@keyframes gradient {
		0% {
			background: linear-gradient(45deg, #00ccff, #0e1538, #0e1538, #d400d4);
		}

		10% {
			background: linear-gradient(81deg, #00ccff, #0e1538, #0e1538, #d400d4);
		}

		20% {
			background: linear-gradient(117deg, #00ccff, #0e1538, #0e1538, #d400d4);
		}

		30% {
			background: linear-gradient(153deg, #00ccff, #0e1538, #0e1538, #d400d4);
		}

		40% {
			background: linear-gradient(189deg, #00ccff, #0e1538, #0e1538, #d400d4);
		}

		50% {
			background: linear-gradient(225deg, #00ccff, #0e1538, #0e1538, #d400d4);
		}

		60% {
			background: linear-gradient(261deg, #00ccff, #0e1538, #0e1538, #d400d4);
		}

		70% {
			background: linear-gradient(297deg, #00ccff, #0e1538, #0e1538, #d400d4);
		}

		80% {
			background: linear-gradient(333deg, #00ccff, #0e1538, #0e1538, #d400d4);
		}

		90% {
			background: linear-gradient(369deg, #00ccff, #0e1538, #0e1538, #d400d4);
		}

		100% {
			background: linear-gradient(405deg, #00ccff, #0e1538, #0e1538, #d400d4);
		}
	}
}

.a .i:nth-child(2) {
	filter: blur(20rpx);
}

.a .span {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	color: gold;
	letter-spacing: 4rpx;
	border: 2rpx solid #040a29;
	border-radius: 6rpx;
	background-color: rgba(14, 21, 26, .65);
	overflow: hidden;
}

.a .span::before {
	content: '';
	position: absolute;
	top: 0;
	left: -50%;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, .075);
	transform: skew(25deg);
}
</style>