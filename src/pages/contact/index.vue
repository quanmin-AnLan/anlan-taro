<template>
	<nut-config-provider theme="dark">
		<div class="contact-container">
			<div class="contact-avatar">
				<div class="img-box">
					<img src="http://img.anlan.xyz/anlan.jpg" alt="">
				</div>
			</div>
			<nut-cell round-radius="0" size="large" title="QQ" desc="2016751527"></nut-cell>
			<nut-cell round-radius="0" size="large" title="QID" desc="anlan18"></nut-cell>
			<nut-cell round-radius="0" size="large" title="WX" desc="MissAnlan_Queen"></nut-cell>
			<nut-cell round-radius="0" size="large" title="Email" desc="anlanbupang@vip.qq.com"></nut-cell>
		</div>
	</nut-config-provider>
</template>

<script setup>
import Taro from '@tarojs/taro'
import './index.less'
const shareData = {
	title: 'Anlan工具箱',
	imageUrl: 'http://img.anlan.xyz/anlan.jpg',
	path: '/pages/index/index'
}
Taro.useShareAppMessage(() => {
	return shareData
})
Taro.useShareTimeline(() => {
	return shareData
})
</script>