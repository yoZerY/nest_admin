/*
 * @Author: yz
 * @Date: 2021-12-09 11:10:48
 * @LastEditTime: 2022-09-18 11:07:45
 * @LastEditors: Please set LastEditors
 * @Description: 分页响应参数
 * @FilePath: /nest_service/src/common/dto/paginated.dto.ts
 */

import { ApiHideProperty } from '@nestjs/swagger'

export class PaginatedDto<T> {
  /* 总条数 */
  total: number

  @ApiHideProperty()
  rows: T[]
}
