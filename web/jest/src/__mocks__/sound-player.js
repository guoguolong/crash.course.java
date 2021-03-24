// Import this named export into your test file:
export const mockPlaySoundFile = jest.fn().mockImplementation(() => {
    console.log('... Play Sound File Called ...')
});
const mock = jest.fn().mockImplementation(() => {
  return {playSoundFile: mockPlaySoundFile};
});

export default mock;