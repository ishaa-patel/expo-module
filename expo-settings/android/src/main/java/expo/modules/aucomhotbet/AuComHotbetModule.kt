package expo.modules.aucomhotbet

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class AuComHotbetModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("AuComHotbet")       
    Function("hello") {
      "Hello world! 👋"
    }
  }
}
