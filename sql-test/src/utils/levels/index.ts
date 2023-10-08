import mainLevels from '../../levels/mainLevels';
import customerLevels from '../../levels/customLevels';

export const allLevels = [...mainLevels, ...customerLevels];

// 根据key 获取关卡
export const getSpecificLevel = (key: string) => {
  return allLevels.find((item) => {
    return item.key === key;
  }) || allLevels[0];
}

// 获取当前关卡位置
export const getCurrentLevel = (currentLevel: LevelType) => {
  return allLevels.findIndex(item => {
    return item.key === currentLevel.key;
  })
}

// 获取上一关
export const getPrevLevel = (currentLevel: LevelType) => {
  const num = getCurrentLevel(currentLevel);
  if (num < 0) {
    return;
  }
  return allLevels[num - 1];
}

// 获取下一关
export const getNextLevel = (currentLevel: LevelType) => {
  const num = getCurrentLevel(currentLevel);
  if (num >= allLevels.length - 1) {
    return;
  }
  return allLevels[num + 1];
}