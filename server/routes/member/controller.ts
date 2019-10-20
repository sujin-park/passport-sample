const Member = require('../../models').Member

export const login = async (req: any, res: any, next: any) => {
  try {
    const items = await Member.findAll()
    res(200).json(items)
  } catch (error) {
    res.status(500).json(error)
  }
}
