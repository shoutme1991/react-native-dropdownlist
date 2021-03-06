describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should be exist placeholder', async () => {
    await expect(element(by.id('placeholder'))).toBeVisible();
  });

  it('should be touch placeholder', async () => {
    await element(by.id('placeholder')).tap();
    await expect(element(by.id('DropList'))).toBeVisible();
    await element(by.id('DropList')).scroll(50, 'up');
  });

  it('should be exist default item', async () => {
    await expect(element(by.id('defaultLabel'))).toBeVisible();
    await expect(element(by.text('0%'))).toBeVisible();
  });

  it('should be change placeholder refer to selected item', async () => {
    const items = ['0%', '25%', '50%', '75%', '100%'];
    items.map(async(elem, i) => {
      await element(by.id(`DropListItem_${i}`)).tap();
      await expect(element(by.text(elem))).toBeVisible();
      await expect(element(by.id(DropList))).toBeNotVisible();
    })
  });

  it('should ', function () {

  });

  // it('should be exist default item', async () => {
  //   await expect(element(by.id('DropListUse1'))).toBeVisible();
  // });

})

// border 값 파라미터로 받기
// placeHolder 값 파라미터로 받기
// 딤처리