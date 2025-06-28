const dataExample = [
    {
        "url": "https://s.shopee.vn/AKOv3cEOvt",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-mb7ioay476qf41.webp",
        "des": "Serum Glycolic Melasyl"
    },
    {
        "url": "https://s.shopee.vn/3LF8p83Yay",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-luafoyy94u8v98.webp",
        "des": "Serum LABONITA"
    },
    {
        "url": "https://s.shopee.vn/5fdBlTuYrv",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mbfbwc8de0vo77.webp",
        "des": "Bảng Phấn Trang Điểm 3CE Layer It All"
    },
    {
        "url": "https://s.shopee.vn/8pa5O329lU",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llin9haff93c81.webp",
        "des": "Combo gội xả Chanh - Rau má"
    },
    {
        "url": "https://s.shopee.vn/5L0DD0Yt2P",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-mbgc6oj95v2fd2.webp",
        "des": "Phấn má hồng mịn lì chuẩn màu Maybelline Fit Me Blush"
    },
    {
        "url": "https://s.shopee.vn/8Kdz5QMhHg",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-mbgc6ltv5u1sf2.webp",
        "des": "Má Hồng Kem Sunkisser"
    },
    {
        "url": "https://s.shopee.vn/5fdFO56rv4",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mb6s7hq3x7zne6.webp",
        "des": "Kem chấm Mụn Biotrade Acnaut Active Cream"
    },
    {
        "url": "https://s.shopee.vn/4VRHzWdPa1",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mbahr8qjqwfn3a.webp",
        "des": "Serum giảm mụn, kháng khuẩn, giảm nhờn"
    },
    {
        "url": "https://s.shopee.vn/x2jqBYoP",
        "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22090-e6wrerf0pthv3a.webp",
        "des": "Bông đắp toner lotion mask Likado"
    },
    {
        "url": "https://s.shopee.vn/8AKc8Ed6a8",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m9401e3wf88e50.webp",
        "des": "Toner Caryophy"
    },
    {
        "url": "https://s.shopee.vn/1LULz9tUnq",
        "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7ra3n-mbiyi5vzlkbg4b.webp",
        "des": "Đầm 2 dây ngang vai phối hoa"
    },
    {
        "url": "https://s.shopee.vn/7AS4wk7Q96",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8zu89quw7eve9.webp",
        "des": "Đầm dài chấm bi CÓ MÚT- EMILY DRESS"
    },
    {
        "url": "https://s.shopee.vn/VvDJJMMmg",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-maupkt8onw7sc8.webp",
        "des": " Son Nhung Bóng Lì Lilybyred Balming Dewy Tint 6g"
    },
    {
        "url": "https://s.shopee.vn/10rVaiaEcu",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljb86akwnsp860.webp",
        "des": "Bàn ủi hơi nước cầm tay Philips"
    },
    {
        "url": "https://s.shopee.vn/VvDMi02HY",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-mafmy84cql7be4.webp",
        "des": "Áo voan xẻ bèo"
    },
    {
        "url": "https://s.shopee.vn/4AoWJJuNq0",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m9jw28cbu3wkd1.webp",
        "des": "Ổ cắm du lịch Điện Quang"
    },
    {
        "url": "https://s.shopee.vn/1g7CN9MpVv",
        "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2y306osj7jk68.webp",
        "des": "Set Đầm Gân Trễ Vai Ngắn"
    },
    {
        "url": "https://s.shopee.vn/1B8tidobYK",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/4701084a-d6d4-4190-b916-ae7371b1a599__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__08ef97d5-0cad-456d-8172-ea01ec246364__074b7317-4ecb-4733-b8b2-fd084bbfeb6f.jpg?t=1721657807521",
        "des": "Áo sơ mi dài tay thêu ren"
    },
    {
        "url": "https://s.shopee.vn/AA3iRlS3qj",
        "image": "https://down-vn.img.susercontent.com/file/sg-11134207-7rfh7-m3vrutjtaa7bcf.webp",
        "des": "[d'Alba Official] Kem chống nắng tím"
    },
    {
        "url": "https://s.shopee.vn/AKN8e4RQVm",
        "image": "https://down-vn.img.susercontent.com/file/sg-11134207-7ren7-m85ouy9xgpsy87.webp",
        "des": "d’alba toner"
    },
    {
        "url": "https://s.shopee.vn/2B1G4zYsh1",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/409058fd-4f17-4ec0-98c3-2ea30c73e148__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__9b3f1a25-3b05-428a-8c7b-a0c79b175fc9__5a86cbc0-793b-4d14-9d27-162b90a85c1d.webp?t=1743521801185",
        "des": "Quần jeans"
    },
    {
        "url": "https://s.shopee.vn/1g4zU4amhw",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/42ce83d5-1718-4c91-9ae4-203d6c45400a__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__3f52ff88-d98b-49f5-8bf4-0afd8f034f9c__140b78ad-6fd7-436b-b57e-266a2b33204c.webp?t=1743343608803",
        "des": "Carrdigan hồng"
    },
    {
        "url": "https://s.shopee.vn/1qOPgNa9Mz",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/4abf9d97-002f-4b38-bb8b-b6f37cb844d9__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__c1857380-8104-4761-9f1b-76fa2dc52131__01b010b5-e201-417c-a077-de16291c094e.webp?t=1743343575207",
        "des": "Gương toàn thân"
    },
    {
        "url": "https://s.shopee.vn/1LS95Sc3Nu",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/4fae1282-9bea-40db-8287-30a27bab9f1e__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__78fd2006-3f12-4542-979d-e05340a876d7__0e04cd0d-4847-43d0-ac64-eb74d78a8215.webp?t=1742559315059",
        "des": "Mái giả"
    },
    {
        "url": "https://s.shopee.vn/1VlZHlbQ2x",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/4545eb6b-2a2a-46cc-b6a7-aa9ebbad68fb__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__50496d54-bfee-483d-85f0-6c65d2bbb135__a10c1ddf-b00c-4775-9192-4191103c5b70.webp?t=1742386662381",
        "des": "Set váy trắng"
    },
    {
        "url": "https://s.shopee.vn/10pIgqdK3s",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/0d2542c3-f004-4be1-8353-15d030a1c544__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__168edd62-a777-4d3b-8b20-1cbe092e9633__c6b127c5-403f-4637-93e4-4c5071dfd713.jpg?t=1739621427803",
        "des": "Son 3ce"
    },
    {
        "url": "https://s.shopee.vn/1B8it9cgiv",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/06060529-ec30-4c47-ade3-7e7649df0f5d__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__11c4a47a-739a-4175-8b9f-a3ba9f1215e2__4984ee18-423d-4440-b42b-5dc79f8ecc8c.jpg?t=1737204153269",
        "des": "Váy nâu"
    },
    {
        "url": "https://s.shopee.vn/gCSIEeajq",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/48f7f10e-9e7b-4695-8311-741205d92728__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__635fcf04-5be5-4d6a-9b20-99d8cee0ec50__15f18f50-916b-434a-923e-4d9b8bff28bf.jpg?t=1736600812837",
        "des": "Cardigan đính ngọc"
    },
    {
        "url": "https://s.shopee.vn/qVsUXdxOt",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/f2fec75b-3083-4bea-aa1c-cf98b3121dc3__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__72b5a267-180c-4309-86c4-5674d5b5da95__fd66c2cf-751e-4c3a-baa9-92d7eafb45ad.jpg?t=1736512207276",
        "des": "Áo dạ đỏ lót bông"
    },
    {
        "url": "https://s.shopee.vn/LZbtcfrPo",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/7c658d95-4253-4c36-ab06-0cdd42299255__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__0a581521-6625-4cb5-98f3-4621a14fe9b0__14bccabd-6242-42e3-af39-75c5f1ec5e31.jpg?t=1736248335996",
        "des": "Máy uốn tóc semee (ở HCM cho bà\n                                                                        nào cần gấp)"
    },
    {
        "url": "https://s.shopee.vn/Vt25vfE4r",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/12260238-fba1-4c96-9372-636a150891a7__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__408a0f77-a7a6-43c4-80ab-d59a723765c2__d48beb5e-9aaa-40f7-b0c1-5139b9223041.jpg?t=1736248323298",
        "des": "Máy uốn tóc seemee (HN)"
    },
    {
        "url": "https://s.shopee.vn/wlV0h85m",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/323a13a9-46d2-4b69-89c9-bcf08137c93d__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__31491900-ff03-4868-864a-9a37a8d50c38__6b08f890-1844-482d-9341-d14d28889e2c.jpg?t=1735054449539",
        "des": "Áo khoác dạ mỏng"
    },
    {
        "url": "https://s.shopee.vn/BGBhJgUkp",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/085e02ce-082d-4c29-a089-74ef6b53ae80__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__3d6db47d-d82c-43fe-8eeb-a06570d4237f__5bf07759-ca80-4a84-b14b-36ccd030e0e0.jpg?t=1734351672372",
        "des": "Phấn phủ IPKN"
    },
    {
        "url": "https://s.shopee.vn/50LRSCO5wm",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/0e557b27-02d0-49a7-9739-ec1ca723519b__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__e3c94173-db79-42f7-ab4d-4e1b7f39f9ad__cff3def6-5099-43d9-9c4a-46a06d642c8f.jpg?t=1733835275086",
        "des": "Áo len đỏ kẻ"
    },
    {
        "url": "https://s.shopee.vn/5AereVNSbp",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/370a893f-40ee-4e62-bc06-5f39bea92d5a__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__a0868e84-3368-4a6e-b12a-7f99775d0b65__022eea1a-46da-4370-9c41-2a3ee0e62f83.jpg?t=1725111477342",
        "des": "Chân váy"
    },
    {
        "url": "https://s.shopee.vn/4fib3aPMck",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/89be311c-48c0-4169-ac96-3e2c86448ea3__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__6c3b072d-954e-49f1-a210-9dd842fb78be__a31d14cb-00d8-49ab-bd4c-10a16cf7fed4.jpg?t=1733495030240",
        "des": "Áo len phối cổ sơ mi"
    },
    {
        "url": "https://s.shopee.vn/4q21FtOjHn",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/fef39d83-2f4e-4de8-a668-06cc6db81cc3__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__f2eaea04-92ea-44c4-a671-4e9d72e29f67__67e5a64b-5c9b-4cce-88dc-bfa55f920796.jpg?t=1733060486254",
        "des": "Áo jean"
    },
    {
        "url": "https://s.shopee.vn/4L5keyQdIi",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/96f19e1a-1f74-46ab-900b-1cbacf89d260__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__039bef88-5557-425e-8499-1cf5425c36b1__825acc30-e47b-45bc-ab82-119031062c50.jpg?t=1733060264966",
        "des": "Quần jeans"
    },
    {
        "url": "https://s.shopee.vn/4VPArHPzxl",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/efdb39be-ffdc-464b-924d-ebb096d623ee__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__97494f59-ab00-4c36-a21e-aa2b3d9da5a9__9f80f71e-c240-4291-8315-3b856ad7aab5.jpg?t=1732812377339",
        "des": "Áo khoác xám"
    },
    {
        "url": "https://s.shopee.vn/40SuGMRtyg",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/61dff7fa-41f2-4abe-96e1-f95cf6bf674a__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__9dcd6a6a-101e-4167-b196-796457d28923__c1de48c7-5394-4d5b-a796-19af9602c2b3.jpg?t=1732799495919",
        "des": "Mũ len"
    },
    {
        "url": "https://s.shopee.vn/4AmKSfRGdj",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/cc583d5d-9987-40ff-9b2c-cbdb1086e750__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__abd2c333-e25c-4e18-8d0e-3678e9996ee1__aee56e3a-192f-4c1d-b95a-5b1b1fee34d2.jpg?t=1732641239901",
        "des": "Áo đỏ cổ chữ V"
    },
    {
        "url": "https://s.shopee.vn/3fq3rkTAee",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/c8239609-32ed-45d8-a6f5-8989a1aa72b2__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__dfab7d9e-5804-4865-abf6-745449b1764c__7759823b-2907-4b96-9fc5-82ce22f4aa4b.jpg?t=1728913073285",
        "des": "Áo Khoác Cardigan đỏ"
    },
    {
        "url": "https://s.shopee.vn/3q9U43SXJh",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/cc49d28e-83d0-480a-a09a-cb02a9bff437__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__2f1f29dd-964b-486b-bf0d-a01502715b9b__99a8c885-7961-4c1c-a11d-6bca94578969.jpg?t=1727178749155",
        "des": "Quần jean"
    },
    {
        "url": "https://s.shopee.vn/3LDDT8URKc",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/011613fe-f547-45ee-81f3-9461f8e781d1__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__a6bda7cc-e855-4333-9020-809d3dbdcef2__5b08ffbd-eabc-431c-a9eb-63256e66afd8.jpg?t=1731166211180",
        "des": "Áo khoác dạ"
    },
    {
        "url": "https://s.shopee.vn/3VWdfRTnzf",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/645bd2bf-d3a4-43f4-9040-d52a9caa7d35__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__4249db91-7105-402d-b68c-7e4d66661d4e__d29bd956-141a-470a-89a4-75a79d90050d.jpg?t=1731158066146",
        "des": "Giày cao gót nơ trắng"
    },
    {
        "url": "https://s.shopee.vn/30aN4WVi0a",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/309426c1-dc26-4a3f-82b1-41095ea993c5__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__4ed8eaca-73b2-4c69-a4b7-d9e0f75bbd2d__07fb36d9-bddb-451f-9276-b012b69dd2d6.jpg?t=1731156162081",
        "des": "Đầm maxi 2 dây"
    },
    {
        "url": "https://s.shopee.vn/50LRSGVgu4",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/495713ae-29bb-4d7e-9748-3daf8e8666ca__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__eed56518-d282-42f4-875c-f171be9b9b7e__bfc516b2-dbf0-4116-a181-6b94c66c9087.jpg?t=1730812709233",
        "des": "máy uốn sóng"
    },
    {
        "url": "https://s.shopee.vn/2fxWfuWygY",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/d0b0c677-529c-4438-a879-085523a6b234__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__58201cd3-77a1-4411-855e-648138af6add__f3c5c07a-1e88-4755-a105-d52c99e2a01b.jpg?t=1730813109848",
        "des": "váy hoa nhí trễ vai"
    },
    {
        "url": "https://s.shopee.vn/2qGwsDWLLb",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/89dbe5e9-a169-4f0f-b4be-e726e6f41941__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__578f02dd-7128-4537-9030-4332a2fd09e9__a9ddd861-d093-41d6-bfe9-ef74ac167236.jpg?t=1720410294923",
        "des": "Kính elip"
    },
    {
        "url": "https://s.shopee.vn/7fMCd6DwXY",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/42a157e2-2eb7-4e8b-87bd-af8865883b69__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__11074c20-4d5d-4995-8f7e-f25da24e0561__1cf8fc5c-42cc-48ab-b34c-3b31b5a962c6.jpg?t=1730384056221",
        "des": "áo khoác crotop"
    },
    {
        "url": "https://s.shopee.vn/7pfcpPDJCb",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/f1fc973e-f498-4921-83ed-2335e23d5f09__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__0140b0dc-c9c2-4f28-97bc-22cd159d347a__906a5db1-24c4-4be6-8765-13fe272320b2.jpg?t=1730378473760",
        "des": "váy body"
    },
    {
        "url": "https://s.shopee.vn/7KjMEUFDDW",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/c6edf1d5-69eb-4249-87ed-8a81cf94f2b6__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__b780b50e-5a4f-4360-9bf8-f21925037108__269981c3-eef7-4c6b-b807-efbcc10e60cb.jpg?t=1728913023622",
        "des": "Áo Khoác Cardigan Len"
    },
    {
        "url": "https://s.shopee.vn/7V2mQnEZsZ",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/e628cba6-5001-43d6-bcf3-d233c83e509b__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__732d1e39-506b-42ce-bc25-dee966ef157b__cbd02adf-fac3-4502-b0df-e5cedd67f7af.jpg?t=1728912871786",
        "des": "Áo cardigan len thêu ngựa"
    },
    {
        "url": "https://s.shopee.vn/706VpsGTtU",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/264acb60-ebd0-4e93-bde7-fd8038a648e0__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__fc8128e5-5e44-485f-8b1a-b6b22e40a8ec__053e4196-8aaf-4ef2-86cd-e336c6e46f6e.jpg?t=1728217258758",
        "des": "Váy lụa bệt vai"
    },
    {
        "url": "https://s.shopee.vn/7APw2BFqYX",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/d3406ce5-3ba3-4ee3-a09b-fde682d73719__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__21b75e7f-e33f-440f-9197-915a9a93c05a__538e81a8-a186-43d8-82ce-953d4ff367c0.jpg?t=1728148933805",
        "des": "Váy lụa 2 dây hở lưng"
    },
    {
        "url": "https://s.shopee.vn/6fTfRGHkZS",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/b9093776-7ad7-461b-af97-1d78a75bba3f__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__6697f2a1-e259-4623-8b4f-6e497242fbd1__3ae6c019-13f0-459e-b095-d0e9cb87d32f.jpg?t=1727923271357",
        "des": "Vit C Neogen"
    },
    {
        "url": "https://s.shopee.vn/6pn5dZH7EV",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/e6cfffc9-7603-4663-ac6a-b0c38b0f3d36__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__d9db28d8-8123-4a37-af5a-b9f4d23df095__98c9f34d-259e-4942-8df0-e554bb9f1db1.jpg?t=1727370794085",
        "des": "Áo cardigan"
    },
    {
        "url": "https://s.shopee.vn/6Kqp2eJ1FQ",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/c41743cb-e277-41bb-ae63-a783228c6d13__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__460f1cf5-dd88-4f0f-ada5-3f05b60780e8__ed6ed663-a513-443c-9ded-599c82975a92.jpg?t=1727875091277",
        "des": "Chân váy thô"
    },
    {
        "url": "https://s.shopee.vn/6VAFExINuT",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/d524e3cb-0211-4b28-917c-b51df1ce6a68__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__8f158b98-6d72-4f59-9abd-ae6c54df57f7__83440b3b-1d8a-4e17-bedf-476a40cc9326.jpg?t=1727179041663",
        "des": "Áo nỉ 3 con mèo"
    },
    {
        "url": "https://s.shopee.vn/60Dye2KHvO",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/04df2fb5-43ee-41dd-ad74-4a407d912011__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__20652258-ed0d-4c96-855d-e3ce94be6763__8ed40876-7f56-45f6-88bc-7157a891af6a.jpg?t=1727178996306",
        "des": "Chân váy trắng"
    },
    {
        "url": "https://s.shopee.vn/6AXOqLJeaR",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/657d4873-7bcc-4c6b-9dbe-0636af8c62af__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__4363bd4a-342b-4652-969e-2bd2eeb8cdca__ef407423-ac87-4e75-b7b2-3983335d2442.jpg?t=1727178867087",
        "des": "Áo corset"
    },
    {
        "url": "https://s.shopee.vn/5fb8FQLYbM",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/92fd051e-8ad5-4ecc-bef5-7c368f0e97e9__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__1cc10980-f65e-459b-890b-d22703653611__ec09416a-72a5-4125-905d-1eaa4cca8eb7.jpg?t=1727178639237",
        "des": "Váy kẻ trễ vai"
    },
    {
        "url": "https://s.shopee.vn/5puYRjKvGP",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/c2a7e478-d80b-4bd3-9f97-8bf52bafecc1__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__529654f0-fefe-482b-a00d-eb488da11af0__ecb038e5-232f-46d6-b99f-17b6ae8b38e0.jpg?t=1727010337830",
        "des": "Áo kiểu đen"
    },
    {
        "url": "https://s.shopee.vn/5KyHqoMpHK",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/06623e06-245f-48b3-bd7c-c712548a113a__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__d27eedb3-4409-46d0-9841-2b96cfa13ae9__09e9f51a-a739-4622-9321-2b196f55dd2f.jpg?t=1726838741886",
        "des": "Váy 2 dây kẻ"
    },
    {
        "url": "https://s.shopee.vn/5VHi37MBwN",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/2b172b30-d3a0-4796-a687-b31ab0ba8705__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__606c6a9d-692e-4ac9-84da-1f1e97c08661__493710bd-0f55-427a-a002-f970df4b6f79.jpg?t=1726838584376",
        "des": "Lăn dưỡng sáng nách"
    },
    {
        "url": "https://s.shopee.vn/AKMxo03n8K",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/71a48d37-cf21-4c94-9d7c-a935af77f489__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__125fc6a3-15ed-4cf3-9db2-df38a16ffd8f__fc908754-c391-4a9a-b607-45e8e6ad8be4.jpg?t=1725110321511",
        "des": "Áo thun dài tay"
    },
    {
        "url": "https://s.shopee.vn/AUgO0J39nN",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/e0645d08-1693-4308-836a-dfc1d0192795__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__116dd1c0-f494-4b06-8bf2-ac6aa306b95c__bb002d32-6eda-46a7-a796-3ff42e6571fb.jpg?t=1725082805612",
        "des": "Dây nhảy đếm số"
    },
    {
        "url": "https://s.shopee.vn/9zk7PO53oI",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/e7f9cffe-fe48-406c-b0ef-4e0da48a3482__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__de236c42-40a3-40c9-8992-4af1c34e6a68__46d718d8-4935-4bea-9d5c-581cb8443242.jpg?t=1720106265503",
        "des": "Đai bảo vệ vòng 1"
    },
    {
        "url": "https://s.shopee.vn/AA3Xbh4QTL",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/40bc37f3-d3f6-434f-b2bc-435160551895__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__83fc5d74-32bb-468c-9dac-6ad229284996__e8b10a5f-c83d-4748-9ef8-c8311cfbfd74.jpg?t=1724773294707",
        "des": "Áo len đen xù trễ vai"
    },
    {
        "url": "https://s.shopee.vn/9f7H0m6KUG",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/fb65a7e6-4bf7-4b2c-955d-a7ca1eed03fe__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__ac8c305a-de7a-44d2-84cf-38311bb6b17b__5d6478ed-bffd-40b6-8f9e-43bbfadb9e33.jpg?t=1723904264936",
        "des": "Túi da"
    },
    {
        "url": "https://s.shopee.vn/9pQhD55h9J",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/cb28de0f-b6b9-4ca5-8acc-c18e3f8939ab__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__126be58a-7ff1-4341-9da6-d3dd70dc21f5__20073f81-72a5-4642-9cbc-94ed93154000.jpg?t=1723639665962",
        "des": "Chân Váy Denim"
    },
    {
        "url": "https://s.shopee.vn/9KUQcA7bAE",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/c43b986f-244b-40ba-a9f0-cf257e962e5f__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__1c310531-ebe0-4a78-8c9d-7232e6f30750__014ba2ab-c19a-4552-8aaf-0df1ec040832.jpg?t=1723639648764",
        "des": "Áo sơ mi thô boi phối ren"
    },
    {
        "url": "https://s.shopee.vn/9UnqoT6xpH",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/ac89945c-820f-4235-b748-61d110988544__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__add17b41-09e3-4636-9247-79bd18e8e46e__29d6efec-275f-44d3-b2ad-5ed9ad933fef.jpg?t=1723047980414",
        "des": "Dép sandal"
    },
    {
        "url": "https://s.shopee.vn/8zraDY8rqC",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/ea5eb290-70f2-4bf6-a0eb-23950205479b__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__740c107a-8358-4dc9-a7a8-5dcc36649106__aee70816-b924-42a1-b5b1-55149b6bd225.jpg?t=1722865815900",
        "des": "Kem chống nắng d'Alba"
    },
    {
        "url": "https://s.shopee.vn/9AB0Pr8EVF",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/cade68eb-08da-40e0-b150-7bb515c3f148__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__ef6f58ad-52d6-41f0-ae03-a0c1db29d589__665252b7-c073-4b6a-8be4-1327082b7f1a.jpg?t=1722767445644",
        "des": "Set váy trắng"
    },
    {
        "url": "https://s.shopee.vn/8fEjowA8WA",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/5bdba1d2-677a-48f9-aad7-6d3fa1c8c0ac__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__9d6267f3-796a-4548-9960-aa96c63e423d__e9b84d70-4bd2-49d9-a2de-11f280d49d5d.jpg?t=1722607180286",
        "des": "Bộ kit trắng răng Smilee"
    },
    {
        "url": "https://s.shopee.vn/8pYA1F9VBD",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/5a5a62d6-34bf-4420-8735-50c9279ddf3c__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__a7d5678c-b9c7-48ff-9255-f8a3db4936f8__2854464f-c889-4480-8a66-568c50e7b616.jpg?t=1722606101184",
        "des": "Bộ kit trắng răng Smilee"
    },
    {
        "url": "https://s.shopee.vn/8KbtQKBPC8",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/66a0efbc-e772-4ac1-b825-9b65819054a1__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__6312c7d1-1ca2-4712-835b-1d9bd3f91d1a__e0de87e2-af4d-4a8e-9ee5-d3a2f8a8a92f.jpg?t=1722216562772",
        "des": "Bộ Đồ Ngủ Pyjama"
    },
    {
        "url": "https://s.shopee.vn/8UvJcdAlrB",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/54cc7be0-1fe7-4c1d-a052-71f4e2245f6e__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__966e25cc-448c-4700-9b99-ad49ab817134__f3d92f0f-ac45-4789-9ed0-4d4a3e965494.jpg?t=1722191551960",
        "des": "Quần jean nơ"
    },
    {
        "url": "https://s.shopee.vn/7zz31iCfs6",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/bd7dca0b-fedb-44ff-acf7-1021880b31e9__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__15258d75-d14d-4608-b2af-4ea966522cd6__3f289c0a-9c93-4f97-a527-51902c7ceab7.jpg?t=1722003225520",
        "des": "Nail box"
    },
    {
        "url": "https://s.shopee.vn/8AITE1C2X9",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/636f1f7d-1b83-4064-a40f-65fae588a2f4__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__6729e8af-dbc3-47b6-8a48-3071fba2fac6__6af13d4e-521b-41c8-8150-e7061328b80e.jpg?t=1722002896565",
        "des": "Nail box"
    },
    {
        "url": "https://s.shopee.vn/2Ve6TbXc24",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/e7935127-2b1d-4313-9687-eb372dcea16b__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__044dd925-80ad-44ca-ae3e-0f675ab849c8__173ffead-7034-44ac-b54f-743df86712ce.jpg?t=1721704273787",
        "des": "Quần Gym dài"
    },
    {
        "url": "https://s.shopee.vn/2LKgHIYFN3",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/4701084a-d6d4-4190-b916-ae7371b1a599__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__08ef97d5-0cad-456d-8172-ea01ec246364__074b7317-4ecb-4733-b8b2-fd084bbfeb6f.jpg?t=1721657807521",
        "des": "Áo sơ mi dài tay thêu ren"
    },
    {
        "url": "https://s.shopee.vn/2B1G4zYsi2",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/792b33f4-77f1-43a1-965b-cd288b2dd181__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__6ac4a37e-0b0f-4e46-ad7d-3422d0fc4aff__8f1855ba-3ed3-4d74-ba1c-8f03346f3a8e.jpg?t=1721625673145",
        "des": "Tạ tay"
    },
    {
        "url": "https://s.shopee.vn/20hpsgZW31",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/5e126293-9172-4195-90ea-5fe7fce9e3f0__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__9b29c15e-9a05-4bc3-b940-536c6a2140de__a6cfbdee-f58e-4916-a587-7e49d009ffcd.jpg?t=1721625803396",
        "des": "Dây kháng lực"
    },
    {
        "url": "https://s.shopee.vn/1qOPgNa9O0",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/0117380d-b52d-4fee-b3e3-e8401808615c__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__d7709a26-4feb-455f-8583-8f6e39ed07e2__c4c2efd5-749a-428a-851f-aae326aefb11.jpg?t=1721397655956",
        "des": "Máy dập phồng chân tóc"
    },
    {
        "url": "https://s.shopee.vn/1g4zU4amiz",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/bd4da1a8-34f3-4c4a-8f67-d09562ec1ef5__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__6d1d1a21-1fb4-48a7-8a39-34b89b245b26__7c0a3e92-f1dd-46f8-8d77-3d2f67e2e2e5.jpg?t=1721311084846",
        "des": "Keo xịt giữ nếp tóc"
    },
    {
        "url": "https://s.shopee.vn/1VlZHlbQ3y",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/ca23a161-b3f8-424d-8a90-50f774a98b3c__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__10b6e2ce-d0ce-4446-b069-ad549bced44d__a076b348-9421-4ef3-8e5b-fc47f8485d15.jpg?t=1721410316330",
        "des": "Serum estee link khác"
    },
    {
        "url": "https://s.shopee.vn/1LS95Sc3Ox",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/6d69d389-26bf-45e4-a90c-64595ddf2b72__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__abd4a215-37ce-4cb1-a435-a234d39a8cf0__e8561888-958d-40d2-9c38-6177af58375d.jpg?t=1720103707450",
        "des": "Serum Estee Lauder"
    },
    {
        "url": "https://s.shopee.vn/1B8it9cgjw",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/4852ca56-7591-4ea4-ab0d-d1cee55f1369__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__6813c193-333d-40c9-95b5-994502bc2d55__d17a75dd-5b59-42e9-8b9e-8f9814f42c63.jpg?t=1721139086816",
        "des": "Mặt nạ BNBG"
    },
    {
        "url": "https://s.shopee.vn/10pIgqdK4v",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/0cbbaa34-08fa-4d7f-91e0-2cd31316a497__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__7ea64867-ba15-46f7-9fb8-f0ed1225b7ee__5646b1fe-b028-44ce-a8e5-d2a9dca0b89a.jpg?t=1721138055790",
        "des": "Mặt nạ Banobagi"
    },
    {
        "url": "https://s.shopee.vn/qVsUXdxPu",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/d4fc36f1-2359-440f-9749-a21d143e9de6__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__b3a08a87-e3f9-4e9c-ba69-87e7b7f6441c__8e208fe6-d7d4-41c2-8002-9203161831b9.jpg?t=1721137718888",
        "des": "Mặt nạ Mediheal"
    },
    {
        "url": "https://s.shopee.vn/gCSIEeakt",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/c833f3cb-bde4-484c-ab85-876197edbd3c__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__13d5db1c-b8fe-41dc-ab15-a27daea0e17a__06f8d29d-e758-4aa0-b4b3-ac1d261ff89d.jpg?t=1721137462067",
        "des": "Mặt nạ tràm trà Caryophy"
    },
    {
        "url": "https://s.shopee.vn/Vt25vfE5s",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/3b2177d1-77a9-4bc9-ac10-daf85a4bd005__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__a0483f17-d8c7-4c70-ade8-113e3864db63__ff613b78-a459-4184-8c2f-e16d5261155a.jpg?t=1720103423562",
        "des": "Mặt nạ Wonjin"
    },
    {
        "url": "https://s.shopee.vn/LZbtcfrQr",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/17f93ce0-1f94-42b4-825a-6fe5e82858a9__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__91dfaaed-d0ee-4e53-8eac-7b64310a8c61__4388f06f-a819-45a2-91f7-132109e4ea1a.jpg?t=1721050550796",
        "des": "kem chống nắng nâng tone"
    },
    {
        "url": "https://s.shopee.vn/BGBhJgUlq",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/7d1d4d9d-23ce-4210-a9eb-5929195f1740__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__47182574-6728-4827-9f3a-1e892a8b9c8f__a13d1050-e5ec-4ff3-b2c4-819f694c6f9d.jpg?t=1721047250873",
        "des": "Chì kẻ môi"
    },
    {
        "url": "https://s.shopee.vn/wlV0h86p",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/3d147919-4f8d-4121-a4d1-12deb380db65__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__c1e2bf69-02e1-471a-96c2-f87c99ac5ccb__e1fbc0aa-d8b1-46f5-b5a7-2a8567815903.jpg?t=1721047228915",
        "des": "Son bóng Romand"
    },
    {
        "url": "https://s.shopee.vn/5AereVNScq",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/c13c4a0a-b881-4c28-b545-f966d04c8a89__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__d6d3efd2-4b82-414f-92d8-8ba3707aad31__06b92fd5-4d2d-4f2b-8b09-2fed799572cc.jpg?t=1721139502212",
        "des": "Son ink"
    },
    {
        "url": "https://s.shopee.vn/50LRSCO5xp",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/b746d70f-dbe3-4ef8-b249-0824234318b3__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__97b41b10-1c5f-46b7-b18c-6d2ed9ddeae8__fc0e9441-cc7f-41ad-921c-729988212ac5.jpg?t=1721047311288",
        "des": "Máy ép tóc"
    },
    {
        "url": "https://s.shopee.vn/4q21FtOjIo",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/7743e5ec-5f16-4c50-9745-95ff9f0178eb__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__de2bbbae-311d-4c01-9d54-acc5e7e60837__9f42c974-1440-482a-881c-57d892bb6954.jpg?t=1720435632215",
        "des": "Áo tập gym"
    },
    {
        "url": "https://s.shopee.vn/4fib3aPMdn",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/e42fe3c6-90f8-4770-9d2b-ab4a88733c8a__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__08bef43d-22aa-4157-ade2-13e5d3407fd9__9362a6cf-14ff-4a65-b222-1d3604c1156f.jpg?t=1720435422699",
        "des": "Quần chạy bộ"
    },
    {
        "url": "https://s.shopee.vn/4VPArHPzym",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/5b83af68-4191-4918-af16-cb49a01daa84__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__f0609af6-04e7-462b-9215-ee4092ba7ed2__ef406414-7cc7-4b21-9016-993f4893837d.jpg?t=1720105551458",
        "des": "Áo khoác tập Gym nữ"
    },
    {
        "url": "https://s.shopee.vn/4L5keyQdJl",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/2f49e02b-7f1d-4a87-9528-ad774f3ab820__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__bbdabe45-dadd-48d8-97a0-c02ff39d9aac__2ed3d76a-ba1b-4b79-a9ec-ab0dbec35c76.jpg?t=1720410525681",
        "des": "Kính bầu tròn"
    },
    {
        "url": "https://s.shopee.vn/4AmKSfRGek",
        "image": "https://cdn.beacons.ai/user_content/HNvpMX4O6aa1CQoOW1sq7ltUcjy1/referenced_images/11e12003-b781-4ba5-a369-e901c9a7c4ff__link-in-bio__links-block__home__9d646cfc-08c2-46d3-ab93-7bd0ff8f0b65__1bec43a0-caa7-4e59-8ada-7a36e9113ccf__3e164d8e-c0e4-4b4d-ae6d-d1b4f164f9dc.jpg?t=1720410411036",
        "des": "Kính mắt mèo đen"
    }
]
